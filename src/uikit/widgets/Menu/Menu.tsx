import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import throttle from 'lodash/throttle'
import { Heading } from 'uikit'
// import { setCurrentNetId } from 'state/info'
import Overlay from '../../components/Overlay/Overlay'
import Flex from '../../components/Box/Flex'
import { useMatchBreakpoints } from '../../hooks'
import Logo from './components/Logo'
import Panel from './components/Panel'
import UserBlock from './components/UserBlock'
import MenuButton from './components/MenuButton'
import { NavProps } from './types'
import Avatar from './components/Avatar'
import { MENU_HEIGHT, SIDEBAR_WIDTH_REDUCED, SIDEBAR_WIDTH_FULL } from './config'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`

const StyledNav = styled.nav<{ showMenu: boolean }>`
  position: fixed;
  top: ${({ showMenu }) => (showMenu ? 0 : `-${MENU_HEIGHT}px`)};
  left: 0;
  transition: top 0.2s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  width: 100%;
  height: ${MENU_HEIGHT}px;
  background-color: ${({ theme }) => theme.colors.backgroundDisabled};
  border-bottom: solid 2px rgba(133, 133, 133, 0.1);
  z-index: 20;
  transform: translate3d(0, 0, 0);
`
const Label = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 30px;
`

const BodyWrapper = styled.div`
  position: relative;
  display: flex;
`

const Inner = styled.div<{ isPushed: boolean; showMenu: boolean }>`
  flex-grow: 1;
  margin-top: ${({ showMenu }) => (showMenu ? `${MENU_HEIGHT}px` : 0)};
  transition: margin-top 0.2s, margin-left 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate3d(0, 0, 0);
  max-width: 100%;

  ${({ theme }) => theme.mediaQueries.nav} {
    // margin-left: ${({ isPushed }) => `${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px`};
    // max-width: ${({ isPushed }) => `calc(100% - ${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px)`};
  }
`

const MobileOnlyOverlay = styled(Overlay)`
  position: fixed;
  height: 100%;

  ${({ theme }) => theme.mediaQueries.nav} {
    display: none;
  }
`

const StyledHeading = styled(Heading)`
  @media (max-width: 768px) {
    display: none;
  }
`

const StyledMenuButton = styled(MenuButton)`
  color: #f7941d;
  background-color: #000000;
  height: 32px;
`
const ActiveStyledMenuButton = styled(MenuButton)`
  color: #ffffff;
  background-color: #000000;
  height: 32px;
`
const StyledLogo = styled(Logo)`
  @media (max-width: 425px) {
    display: none;
  }
`

const Menu: React.FC<NavProps> = ({
  account,
  login,
  logout,
  isDark,
  toggleTheme,
  langs,
  setLang,
  currentLang,
  cakePriceUsd,
  leosPriceUsd,
  links,
  profile,
  children,
}) => {
  const { isXl } = useMatchBreakpoints()
  const isMobile = isXl === false
  const dispatch = useDispatch()
  // const [isPushed, setIsPushed] = useState(!isMobile);
  const [isPushed, setIsPushed] = useState(false)
  const [showMenu, setShowMenu] = useState(true)
  const refPrevOffset = useRef(window.pageYOffset)
  const [currentId, setCurrentId] = useState(1)

  const changeNetwork = (chainid: string) => {
    // if(window.ethereum) {
    //   await window.ethereum.request({
    //     method: 'wallet_switchEthereumChain',
    //     params: [{ chainId: chainid }], // chainId must be in hexadecimal numbers
    //   });
    // }
    // if (chainid === '0x1') {
    //   dispatch(setCurrentNetId(1))
    //   setCurrentId(1)
    // } else {
    //   dispatch(setCurrentNetId(56))
    //   setCurrentId(56)
    // }
    // console.info(currentId)
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.pageYOffset
      const isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight
      const isTopOfPage = currentOffset === 0
      // Always show the menu when user reach the top
      if (isTopOfPage) {
        setShowMenu(true)
      }
      // Avoid triggering anything at the bottom because of layout shift
      else if (!isBottomOfPage) {
        if (currentOffset < refPrevOffset.current) {
          // Has scroll up
          setShowMenu(true)
        } else {
          // Has scroll down
          setShowMenu(false)
        }
      }
      refPrevOffset.current = currentOffset
    }
    const throttledHandleScroll = throttle(handleScroll, 200)

    window.addEventListener('scroll', throttledHandleScroll)
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll)
    }
  }, [])

  // Find the home link if provided
  const homeLink = links.find((link) => link.label === 'Home')

  return (
    <Wrapper>
      <StyledNav showMenu={showMenu}>
        <StyledLogo
          isPushed={isPushed}
          togglePush={() => setIsPushed((prevState: boolean) => !prevState)}
          isDark={isDark}
          href={homeLink?.href ?? '/'}
        />
        {/* <>
          <StyledMenuButton onClick={() => changeNetwork('0x1')}>ETHEREUM</StyledMenuButton>
          <StyledHeading as="h1" scale="xl" mb="24px" color="text" marginBottom={0}>
            SMART NODES
          </StyledHeading>
          <ActiveStyledMenuButton onClick={() => changeNetwork('0x38')}>BINANCE</ActiveStyledMenuButton>
        </> */}
        {!!login && !!logout && (
          <Flex>
            <UserBlock account={account} login={login} logout={logout} />
            {/* {profile && <Avatar profile={profile} />} */}
          </Flex>
        )}
      </StyledNav>
      <BodyWrapper>
        <Panel
          isPushed={isPushed}
          isMobile={isMobile}
          showMenu={showMenu}
          isDark={isDark}
          toggleTheme={toggleTheme}
          langs={langs}
          setLang={setLang}
          currentLang={currentLang}
          cakePriceUsd={cakePriceUsd}
          leosPriceUsd={leosPriceUsd}
          pushNav={setIsPushed}
          links={links}
        />
        <Inner isPushed={isPushed} showMenu={showMenu}>
          {children}
        </Inner>
        <MobileOnlyOverlay show={isPushed} onClick={() => setIsPushed(false)} role="presentation" />
      </BodyWrapper>
    </Wrapper>
  )
}

// const Menu = () => {
//   return (
//     <div>Home</div>
//   )
// };
export default Menu
