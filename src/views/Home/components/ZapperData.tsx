import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import {ethers} from 'ethers';
import { Card, CardBody, Text, Heading, CopyToClipboard } from 'uikit'
import CardValue from 'components/CardValue'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { BSCProvider, simpleRpcProvider } from 'utils/provider'
import {State} from '../../../state/types';

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
const ZapperData = ({currentId}) => {
  const treasureWallet = '0xAF59E55e72C346E070Ce1ffd07398e7Cee882fb5'
  const marketingWallet = '0x01a6a0334f310e1E89bfd7daf609f2F17B3E1Eb3'
  const devWallet = '0xeC14e5C2d029Cb60e7629d59870eD00Aa9863Ad1'
  const { chainId } = useActiveWeb3React()

  const [treasureEth, setTreasureEth] = useState(0);
  const [marketingEth, setMarketingEth] = useState(0);
  const [devEth, setDevEth] = useState(0);

  const {currentNetId} = useSelector((state: State) => ({
    currentNetId: state.info.currentNetId,
  }))

  useEffect(() => {
    const fetchWallet = async () => {
      if (currentNetId === 1) {
        const trea = await simpleRpcProvider.getBalance(treasureWallet)
        const formatt:any = ethers.utils.formatEther(trea)
        setTreasureEth(formatt*1.0);
        const mark = await simpleRpcProvider.getBalance(marketingWallet)
        const formatm:any = ethers.utils.formatEther(mark)
        setMarketingEth(formatm*1.0);
        const dev = await simpleRpcProvider.getBalance(devWallet)
        const formatd:any = ethers.utils.formatEther(dev)
        setDevEth(formatd*1.0);
      } else {
        const trea = await BSCProvider.getBalance(treasureWallet)
        const formatt:any = ethers.utils.formatEther(trea)
        setTreasureEth(formatt*1.0)
        const mark = await BSCProvider.getBalance(marketingWallet)
        const formatm:any = ethers.utils.formatEther(mark)
        setMarketingEth(formatm*1.0)
        const dev = await BSCProvider.getBalance(devWallet)
        const formatd:any = ethers.utils.formatEther(dev)
        setDevEth(formatd*1.0)
      }
    }
    fetchWallet()
  }, [currentNetId])

  return (
    <StyledCard>
      <StyledCardBody>
        <Heading scale="lg" mb="24px">
          Vault Data
        </Heading>
        <div>
          <Text fontSize="18px">Treasure Wallet</Text>
          <BlockWrapper>
            <Block>
              <Label>Address</Label>
              <div style={{ display: 'flex' }}>
                <Text fontSize="18px">
                  {treasureWallet.slice(0, 7)}.....{treasureWallet.slice(-7)}
                </Text>
                <CopyToClipboard toCopy={treasureWallet} />
              </div>
            </Block>
            <Block>
              <Label>{currentNetId === 1 ? 'ETH' : 'BNB'} in Wallet</Label>
              <CardValue
                value={treasureEth}
                decimals={5}
                fontSize="18px"
                lineHeight="36px"
              />
            </Block>
          </BlockWrapper>
        </div>
        <div>
          <Text fontSize="18px">Marketing Wallet</Text>
          <BlockWrapper>
            <Block>
              <Label>Address</Label>
              <div style={{ display: 'flex' }}>
                <Text fontSize="18px">
                  {marketingWallet.slice(0, 7)}.....{marketingWallet.slice(-7)}
                </Text>
                <CopyToClipboard toCopy={marketingWallet} />
              </div>
            </Block>
            <Block>
              <Label>{currentNetId === 1 ? 'ETH' : 'BNB'} in Wallet</Label>
              <CardValue
                value={marketingEth}
                decimals={5}
                fontSize="18px"
                lineHeight="36px"
              />
            </Block>
          </BlockWrapper>
        </div>
        <div>
          <Text fontSize="18px">Dev Wallet</Text>
          <BlockWrapper>
            <Block>
              <Label>Address</Label>
              <div style={{ display: 'flex' }}>
                <Text fontSize="18px">
                  {devWallet.slice(0, 7)}.....{devWallet.slice(-7)}
                </Text>
                <CopyToClipboard toCopy={devWallet} />
              </div>
            </Block>
            <Block>
              <Label>{currentNetId === 1 ? 'ETH' : 'BNB'} in Wallet</Label>
              <CardValue value={devEth} decimals={5} fontSize="18px" lineHeight="36px" />
            </Block>
          </BlockWrapper>
        </div>
      </StyledCardBody>
    </StyledCard>
  )
}

export default ZapperData
