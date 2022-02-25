import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { ethers } from 'ethers';
import { Card, CardBody, Text, Heading, CopyToClipboard } from 'uikit'
import CardValue from 'components/CardValue'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { BSCProvider, simpleRpcProvider } from 'utils/provider'
import { State } from '../../../state/types';

const StyledCard = styled(Card)`
  min-height: 376px;
`

const Block = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-between;
`

const Label = styled.div`
  color: ${({ theme }) => theme.colors.textSubtle};
`

const StyledCardBody = styled(CardBody)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const BlockWrapper = styled.div`
  margin-top: 10px;
  padding-left: 20px;
`
const ZapperData = ({ currentId }) => {
  const treasureWallet = '0xAF59E55e72C346E070Ce1ffd07398e7Cee882fb5'
  const marketingWallet = '0x01a6a0334f310e1E89bfd7daf609f2F17B3E1Eb3'
  const devWallet = '0xeC14e5C2d029Cb60e7629d59870eD00Aa9863Ad1'
  const { chainId } = useActiveWeb3React()

  const [treasureEth, setTreasureEth] = useState(0);
  const [marketingEth, setMarketingEth] = useState(0);
  const [devEth, setDevEth] = useState(0);

  const { currentNetId } = useSelector((state: State) => ({
    currentNetId: state.info.currentNetId,
  }))

  useEffect(() => {
    const fetchWallet = async () => {
      if (currentNetId === 1) {
        const trea = await simpleRpcProvider.getBalance(treasureWallet)
        const formatt: any = ethers.utils.formatEther(trea)
        setTreasureEth(formatt * 1.0);
        const mark = await simpleRpcProvider.getBalance(marketingWallet)
        const formatm: any = ethers.utils.formatEther(mark)
        setMarketingEth(formatm * 1.0);
        const dev = await simpleRpcProvider.getBalance(devWallet)
        const formatd: any = ethers.utils.formatEther(dev)
        setDevEth(formatd * 1.0);
      } else {
        const trea = await BSCProvider.getBalance(treasureWallet)
        const formatt: any = ethers.utils.formatEther(trea)
        setTreasureEth(formatt * 1.0)
        const mark = await BSCProvider.getBalance(marketingWallet)
        const formatm: any = ethers.utils.formatEther(mark)
        setMarketingEth(formatm * 1.0)
        const dev = await BSCProvider.getBalance(devWallet)
        const formatd: any = ethers.utils.formatEther(dev)
        setDevEth(formatd * 1.0)
      }
    }
    fetchWallet()
  }, [currentNetId])

  return (
    <StyledCard>
      <StyledCardBody>
        <div>
          <Heading scale="lg" mb="4px">
            Nodes
          </Heading>
          <Label>Currently 15/100</Label>
        </div>
        <div>
          List Here
        </div>
      </StyledCardBody>
    </StyledCard>
  )
}

export default ZapperData
