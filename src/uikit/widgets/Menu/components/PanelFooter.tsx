import React from "react";
import styled from "styled-components";
import { CogIcon } from "../../../components/Svg";
import IconButton from "../../../components/Button/IconButton";
import { MENU_ENTRY_HEIGHT } from "../config";
import { PanelProps, PushedProps } from "../types";
// import { LinkLabel } from "./MenuEntry";
import { MenuEntry, LinkLabel, LinkStatus } from "./MenuEntry";
// import CakePrice from "./CakePrice";
// import LeosPrice from "./LeosPrice";
// import ThemeSwitcher from "./ThemeSwitcher";
// import SocialLinks from "./SocialLinks";
// import LangSelector from "./LangSelector";

interface Props extends PanelProps, PushedProps { }

const Container = styled.div`
  // flex: none;
  padding: 8px 4px;
  background-color: ${({ theme }) => theme.nav.background};
  border-top: solid 2px rgba(133, 133, 133, 0.1);
  display: flex;
`;

const SettingsEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 0 8px;
`;

const SocialEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 0 16px;
`;

const PanelFooter: React.FC<Props> = ({
  isPushed,
  pushNav,
  toggleTheme,
  isDark,
  cakePriceUsd,
  leosPriceUsd,
  currentLang,
  langs,
  setLang,
}) => {
  if (!isPushed) {
    return (
      <Container>
        <IconButton variant="text" onClick={() => pushNav(true)}>
          <img src="/images/discord.png" alt="discord icon" width='32px' />
        </IconButton>
      </Container>
    );
  }

  return (
    <Container>
      <IconButton variant="text" onClick={() => pushNav(true)}>
        <img src="/images/discord.png" alt="discord icon" width='32px'/>
      </IconButton>
    </Container>
  );
};

export default PanelFooter;
