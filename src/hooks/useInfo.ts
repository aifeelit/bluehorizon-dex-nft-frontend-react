import { useCallback, useEffect, useState, useMemo } from 'react'
import { getUnixTime, startOfHour, Duration, sub } from 'date-fns'
import { PriceChartEntry } from 'utils/info/types'
import fetchTokenPriceData from 'utils/info/priceData'

export const useTokenPriceData = (
  address: string,
  interval: number,
  timeWindow: Duration,
): PriceChartEntry[] | undefined => {

  const [priceData, setPriceData] = useState<PriceChartEntry[]>(null)

  const [error, setError] = useState(false)
  
  // construct timestamps and check if we need to fetch more data
  const utcCurrentTime = getUnixTime(new Date()) * 1000
  const startTimestamp = getUnixTime(startOfHour(sub(utcCurrentTime, timeWindow)))

  useEffect(() => {
    const fetch = async () => {
      const { data, error: fetchingError } = await fetchTokenPriceData(address, interval, startTimestamp)
      if (data) {
        setPriceData(data)
      }
      if (fetchingError) {
        setError(true)
      }
    }
    if (!priceData && !error) {
      fetch()
    }
  }, [address, error, interval, startTimestamp, timeWindow, priceData])

  return priceData
}