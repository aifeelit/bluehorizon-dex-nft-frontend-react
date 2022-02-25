import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { Duration, format, fromUnixTime } from 'date-fns'
import { UnsupportedChainIdError, useWeb3React, Web3ReactProvider } from '@web3-react/core'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { Card, CardBody, Text, Heading } from 'uikit'
import ConnectWalletButton from 'components/ConnectWalletButton'
import CardValue from 'components/CardValue'
import { useFsvBalance, useFsvBNBBalance, useEthBalance, useBNBBalance } from 'state/user/hooks'
import { useTokenPriceData } from 'hooks/useInfo'
import contracts from 'config/contracts'
import { formatAmount } from 'utils/formatInforNumbers'
import CardBusdValue from 'components/CardBusdValue'
import { State } from '../../../state/types'

const StyledCard = styled(Card)`
  min-height: 60px;
`

const RowBlock = styled.div`
  display: flex;
  flex-direction: row;
`

const RowBlockBetween = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Label = styled.div`
  color: ${({ theme }) => theme.colors.textSubtle};
`
const Actions = styled.div`
  margin-top: 24px;
`
const StyledCardBody = styled(CardBody)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-center;
`

const DEFAULT_TIME_WINDOW: Duration = { weeks: 1 }
const ONE_HOUR_SECONDS = 3600

const RewardCard = ({ currentId }) => {
  const { account } = useWeb3React()
  const { currentNetId } = useSelector((state: State) => ({
    currentNetId: state.info.currentNetId,
  }))
  const [ethPrice, setEthPrice] = useState<number>(0)
  const [bnbPrice, setBnbPrice] = useState<number>(0)
  const [fsvPrice, setFsvPrice] = useState<number>(0)
  const { chainId } = useActiveWeb3React()
  const { balance: fsvBalance } = useFsvBalance(account, 'eth')
  const { balance: fsvBNBBalance } = useFsvBNBBalance(account, 'bsc')
  const { balance: ethBalance } = useEthBalance(account)
  const { balance: bnbBalance } = useBNBBalance(account)
  const [hoverValue, setHoverValue] = useState<number | undefined>()

  const address: string = contracts.fsvETH // Replace it with FSV token address
  const priceData = useTokenPriceData(address.toLowerCase(), ONE_HOUR_SECONDS, DEFAULT_TIME_WINDOW)

  axios
    .get('https://api.pancakeswap.info/api/v2/tokens/0x2170ed0880ac9a755fd29b2688956bd959f933f8')
    .then(({ data }) => {
      setEthPrice(data.data.price)
    })
  axios
    .get('https://api.pancakeswap.info/api/v2/tokens/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c')
    .then(({ data }) => {
      setBnbPrice(data.data.price)
    })

  useEffect(() => {
    const getLatestValueDisplay = () => {
      let valueToDisplay = null
      if (priceData) valueToDisplay = formatAmount(priceData[priceData.length - 1].open)
      setFsvPrice(valueToDisplay * 1.0)
    }
    getLatestValueDisplay()
  }, [priceData])

  return (
    <StyledCard>
      <StyledCardBody>
        <Heading scale="sm" mb="8px">
          $SNRZ
        </Heading>
        <Label>$11.25</Label>
        IMG
      </StyledCardBody>
    </StyledCard>
  )
}

export default RewardCard
