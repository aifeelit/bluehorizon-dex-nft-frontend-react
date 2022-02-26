import React, { useState } from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout, Button } from 'uikit'
import { Flex } from 'uikit/components/Box'
import Page from 'components/Layout/Page'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { simpleRpcProvider, BSCProvider } from 'utils/provider'
import { getETHUrl, getBSCUrl } from '../../utils/getRpcUrl'
import WalletCard from './components/WalletCard'
import Tokenomics from './components/Tokenomics'
import PriceChart from './components/PriceChart'
import ZapperData from './components/ZapperData'
import BridgeCard from './components/BridgeCard'
import RewardCard from './components/RewardCard'
import NewnodeCard from './components/NewnodeCard'
import IncomeCard from './components/IncomeCard'

export const nodes = [process.env.REACT_APP_NODE]
export const BSCnodes = [process.env.REACT_APP_BSCNODE]

const Hero = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 32px;
  text-align: center;
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 24px;
  grid-gap: 24px;

  & > div {
    grid-column: span 12;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 6;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    margin-bottom: 32px;
    grid-gap: 32px;

    & > div {
      grid-column: span 3;
    }
  }
`
const CustomCards = styled(Cards)`
  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 6;
    }
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const BigCards = styled(Cards)`
  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 12;
    }
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`
const StyledButton = styled(Button)`
  min-width: 120px;  
  &:active {
    opacity: 0.4;
  }
`
const ActiveStyledButton = styled(Button)`
  min-width: 120px;
  opacity: 0.6;
  &:active {
    opacity: 0.4;
  }
`

const StyledFlex = styled(Flex)`
  gap: 50px;
`

const Home: React.FC = () => {
  const [currentId, setCurrentId] = useState<number>(1)

  const changeNetwork = (chainid: string) => {
    // if(window.ethereum) {
    //   await window.ethereum.request({
    //     method: 'wallet_switchEthereumChain',
    //     params: [{ chainId: chainid }], // chainId must be in hexadecimal numbers
    //   });
    // }
    if (chainid === '0x1') setCurrentId(1)
    else setCurrentId(56)
  }

  return (
    <>
      <Page>
        <div>
          <Cards>
            <WalletCard title="$SMN" val1="$11.25" val2={55} img='images/status1.jpg' />
            <WalletCard title="Total Smart Nodes" val1="6500" val2={-5} img='images/status2.jpg' />
            <WalletCard title="Your Total Claimed $SMN" val1="3587" val2={null} img='images/status3.jpg' />
            <WalletCard title="Remaining time for new node creation" val1="2d 20h 33m" val2={null} img='images/status4.jpg' />
          </Cards>
          <BigCards>
            <IncomeCard img='images/income.jpg' />
            <CustomCards>
              <RewardCard />
              <NewnodeCard />
            </CustomCards>
          </BigCards>
          <BigCards>
            <ZapperData currentId={currentId} />
            <PriceChart />
          </BigCards>
        </div>
      </Page>
    </>
  )
}

export default Home