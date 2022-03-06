import React from 'react'
import styled from 'styled-components'
import { CogIcon } from '../../../components/Svg'
import IconButton from '../../../components/Button/IconButton'
import { MENU_ENTRY_HEIGHT } from '../config'
import { PanelProps, PushedProps } from '../types'
import CakePrice from './CakePrice'
import ThemeSwitcher from './ThemeSwitcher'
import SocialLinks from './SocialLinks'
import LangSelector from './LangSelector'
import Bottom from './Bottom'
import UserBlock from './UserBlock'

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


interface Props extends PanelProps, PushedProps {}

const Container = styled.div`
  // flex: none;
  // display: flex;
  padding: 8px 4px 20px;
  background-color: ${({ theme }) => theme.nav.background};
  // border-top: solid 2px rgba(133, 133, 133, 0.1);
`

const SettingsEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 0 8px;
`

const SocialEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 0 16px;
`
const WalletWrapper: React.FC = styled.div`
  background-image: linear-gradient(68deg, #08223c 10%, #0d3053 100%);
  box-shadow: 0px 0px 3px black;
  padding: 24px;
  border-radius: 15px;
  height: 200px;
  width: 90%;
  margin: auto;
  color: white;
  margin-bottom: 20px;
  padding-top: 20px;
`
const LogoIcon = styled.img`
  position: absolute;
  left: 14px;
  width: 100px;
  margin-top: -40px;
  margin-bo
`
const Background  =  styled.img`
  position: relative;
  float: right;
  top: -5px;
  left: 10px;
`
const Title = styled.p`
  font-weight: bold;
  font-size: 20px;
  margin: 10px 0px;
`
const Text = styled.p`
  font-size: 16px;
  line-height: 1.4em;
`

const Custom = styled(UserBlock)`
   margin-top: 20px;

`

const PanelFooter: React.FC<Props> = ({
  isPushed,
  pushNav,
  toggleTheme,
  isDark,
  cakePriceUsd,
  currentLang,
  langs,
  setLang,
  account,
  login,
  logout
}) => {
  if (!isPushed) {
    return (
      <Container>
        <IconButton variant="text" onClick={() => pushNav(true)}>
          <CogIcon />
        </IconButton>
      </Container>
    )
  }

  return (
    <Container>
      <CakePrice cakePriceUsd={cakePriceUsd} />
    </Container>
  )
}

export default PanelFooter
