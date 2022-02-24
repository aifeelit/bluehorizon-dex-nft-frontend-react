import { getUnixTime } from 'date-fns'
import { gql } from 'graphql-request'
import { INFO_CLIENT } from 'config'
import { getETHPrice, getFSVPrice, getBNBPrice } from 'state/info'
import store from 'state'
import { getBlocksFromTimestamps } from './useBlocksFromTimestamps'
import { multiQuery } from './infoQueryHelpers'
import { PriceChartEntry } from './types'

const getPriceSubqueries = (tokenAddress: string, blocks: any) =>
  blocks.map(
    (block: any) => `
      t${block.timestamp}:token(id:"${tokenAddress}", block: { number: ${block.number} }) { 
        derivedETH
      }
      b${block.timestamp}: bundle(id:"1", block: { number: ${block.number} }) { 
        ethPrice
      }
    `,
  )

/**
 * Price data for token and ETH based on block number
 */
const priceQueryConstructor = (subqueries: string[]) => {
  return gql`
    query tokenPriceData {
      ${subqueries}
    }
  `
}

const fetchTokenPriceData = async (
  address: string,
  interval: number,
  startTimestamp: number,
): Promise<{
  data?: PriceChartEntry[]
  error: boolean
}> => {

  // Construct timestamps to query against
  const endTimestamp = getUnixTime(new Date())-5*60
  // const endTimestamp = getUnixTime(new Date())
  const timestamps = []
  let time = startTimestamp
  while (time <= endTimestamp) {
    timestamps.push(time)
    time += interval
  }
  try {
    const blocks = await getBlocksFromTimestamps(timestamps, 'asc', 500)


    if (!blocks || blocks.length === 0) {
      return {
        error: false,
      }
    }

    const prices: any | undefined = await multiQuery(
      priceQueryConstructor,
      getPriceSubqueries(address, blocks),
      INFO_CLIENT,
      200,
    )

    if (!prices) {
      console.error('Price data failed to load')
      return {
        error: false,
      }
    }

    // format token ETH price results
    const tokenPrices: {
      timestamp: string
      derivedETH: number
      priceUSD: number
      ethPrice: number
      bnbPrice: number
    }[] = []

    
    // Get Token prices in ETH
    Object.keys(prices).forEach((priceKey) => {
      const timestamp = priceKey.split('t')[1]
      // if its ETH price e.g. `b123` split('t')[1] will be undefined and skip ETH price entry
      if (timestamp) {
        tokenPrices.push({
          timestamp,
          derivedETH: prices[priceKey]?.derivedETH ? parseFloat(prices[priceKey].derivedETH) : 0,
          priceUSD: 0,
          ethPrice: 0,
          bnbPrice: 0
        })
      }
    })
    
    // Go through ETH USD prices and calculate Token price based on it
    Object.keys(prices).forEach((priceKey) => {
      const timestamp = priceKey.split('b')[1]
      // if its Token price e.g. `t123` split('b')[1] will be undefined and skip Token price entry
      if (timestamp) {
        const tokenPriceIndex = tokenPrices.findIndex((tokenPrice) => tokenPrice.timestamp === timestamp)
        if (tokenPriceIndex >= 0) {
          const { derivedETH } = tokenPrices[tokenPriceIndex]
          tokenPrices[tokenPriceIndex].priceUSD = parseFloat(prices[priceKey]?.ethPrice ?? 0) * derivedETH
          tokenPrices[tokenPriceIndex].ethPrice = prices[priceKey]?.ethPrice ?? 0
          tokenPrices[tokenPriceIndex].bnbPrice = prices[priceKey]?.bnbPrice ?? 0
        }
      }
    })
    
    // graphql-request does not guarantee same ordering of batched requests subqueries, hence sorting by timestamp from oldest to newest
    tokenPrices.sort((a, b) => parseInt(a.timestamp, 10) - parseInt(b.timestamp, 10))
    

    store.dispatch(getFSVPrice(tokenPrices[tokenPrices.length-1].priceUSD))
    store.dispatch(getETHPrice(tokenPrices[tokenPrices.length-1].ethPrice))
    store.dispatch(getBNBPrice(tokenPrices[tokenPrices.length-1].bnbPrice))


    const formattedHistory = []
    
    // for each timestamp, construct the open and close price
    for (let i = 0; i < tokenPrices.length - 1; i++) {
      formattedHistory.push({
        time: parseFloat(tokenPrices[i].timestamp),
        open: tokenPrices[i].priceUSD,
        close: tokenPrices[i + 1].priceUSD,
        high: tokenPrices[i + 1].priceUSD,
        low: tokenPrices[i].priceUSD,
      })
    }

    return { data: formattedHistory, error: false }
  } catch (error) {
    console.error(`Failed to fetch price data for token ${address}`, error)
    return {
      error: true,
    }
  }
}

export default fetchTokenPriceData
