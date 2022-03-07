import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { Duration, format, fromUnixTime } from 'date-fns'
import { UnsupportedChainIdError, useWeb3React, Web3ReactProvider } from '@web3-react/core'
// import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { Card, CardBody, Text, Heading } from 'uikit'
// import ConnectWalletButton from 'components/ConnectWalletButton'
// import CardValue from 'components/CardValue'
// import { useFsvBalance, useFsvBNBBalance, useEthBalance, useBNBBalance } from 'state/user/hooks'
// import { useTokenPriceData } from 'hooks/useInfo'
// import contracts from 'config/contracts'
// import { formatAmount } from 'utils/formatInforNumbers'
// import CardBusdValue from 'components/CardBusdValue'
import { State } from '../../../state/types'

const StyledCard = styled(Card)`
  height: 200px;
`

const RowBlock = styled.div`
  display: flex;
  flex-direction: row;
`

const RowBlockBetween = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Label = styled.div<{labelSize: string}>`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: ${(p) => p.labelSize};
  margin-bottom: 24px;
  margin-top: 24px;
`
const StyledCardBody = styled(CardBody)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const StyledImg = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 10px;
  // margin-top: 20px;
  margin-left: 20px;
`

// const DEFAULT_TIME_WINDOW: Duration = { weeks: 1 }
// const ONE_HOUR_SECONDS = 3600

const IncomeCard = ({ img }) => {
  // const { account } = useWeb3React()
  // const { currentNetId } = useSelector((state: State) => ({
  //   currentNetId: state.info.currentNetId,
  // }))
  // const [ethPrice, setEthPrice] = useState<number>(0)
  // const [bnbPrice, setBnbPrice] = useState<number>(0)
  // const [fsvPrice, setFsvPrice] = useState<number>(0)
  // const { chainId } = useActiveWeb3React()
  // const { balance: fsvBalance } = useFsvBalance(account, 'eth')
  // const { balance: fsvBNBBalance } = useFsvBNBBalance(account, 'bsc')
  // const { balance: ethBalance } = useEthBalance(account)
  // const { balance: bnbBalance } = useBNBBalance(account)
  // const [hoverValue, setHoverValue] = useState<number | undefined>()

  // const address: string = contracts.fsvETH 
  // Replace it with FSV token address
  // const priceData = useTokenPriceData(address.toLowerCase(), ONE_HOUR_SECONDS, DEFAULT_TIME_WINDOW)

  // axios
  //   .get('https://api.pancakeswap.info/api/v2/tokens/0x2170ed0880ac9a755fd29b2688956bd959f933f8')
  //   .then(({ data }) => {
  //     setEthPrice(data.data.price)
  //   })
  // axios
  //   .get('https://api.pancakeswap.info/api/v2/tokens/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c')
  //   .then(({ data }) => {
  //     setBnbPrice(data.data.price)
  //   })

  // useEffect(() => {
  //   const getLatestValueDisplay = () => {
  //     let valueToDisplay = null
  //     if (priceData) valueToDisplay = formatAmount(priceData[priceData.length - 1].open)
  //     setFsvPrice(valueToDisplay * 1.0)
  //   }
  //   getLatestValueDisplay()
  // }, [priceData])

  return (
    <StyledCard>
      <RowBlockBetween>
        <StyledImg src={img} alt='status_logo' />
        <StyledCardBody>
          <Heading scale="sm">
            Your Monthly Passive Income
          </Heading>
          <Label labelSize='42px'>$1432</Label>
          <Heading scale="sm">
            Based on 15nodes & 350SMN
          </Heading>
        </StyledCardBody>
      </RowBlockBetween>
    </StyledCard>
  )
}

export default IncomeCard