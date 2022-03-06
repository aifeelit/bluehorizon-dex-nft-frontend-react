import React from 'react'
import styled from 'styled-components'
import { PancakeRoundIcon } from '../../../components/Svg'
import Text from '../../../components/Text/Text'
import Skeleton from '../../../components/Skeleton/Skeleton'

import {
  HomeIcon,
  ConnectIcon,
  FarmIcon,
  NFTIcon,
  SwapIcon,
  SidebarConnect,
  SidebarConnectBtn,
  SidebarMoon,
  Logo,
  Avatar,
  LangEN,
  defaultLogo,
  sidebarBalanceLeft,
  sidebarDots,
  bottomLeftIcon,
  sidebarEllipse,
} from '../../../../../components/Image'

interface Props {
  cakePriceUsd?: number
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  margin: auto;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`

const PriceWrapper = styled.div`
  display: flex;
  border-radius: 15px;
  background-image: linear-gradient(68deg, #08223c 10%, #0d3053 100%);
  height: 40px;
  width: 90%;
  margin: auto;
  box-shadow: 0px 0px 3px black;
`

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`

const CakePrice: React.FC<Props> = ({ cakePriceUsd }) => {
  const href =  `${window.location.origin}/swap?outputCurrency=${process.env.REACT_APP_CAKETOKEN}`
  return (
    <PriceWrapper>
      <img src={sidebarBalanceLeft} alt="balance left" />
      <Wrapper>
        <PriceLink
          href={href}
          target="_blank"
        >
          <img src={defaultLogo} alt="" width="50px"/>
          <Text color="text" bold ml="10px">{cakePriceUsd?`$${cakePriceUsd.toFixed(3)}`:'$00.000'}</Text>
        </PriceLink>
      </Wrapper>
      <img src={sidebarDots} alt="balance dots" style={{marginTop:"5px"}}/>
    </PriceWrapper>
  )
}

export default React.memo(CakePrice)
