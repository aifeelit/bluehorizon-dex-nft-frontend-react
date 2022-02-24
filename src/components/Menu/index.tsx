import React from "react";
import { useWeb3React } from "@web3-react/core";
import { Menu as UikitMenu } from "uikit/widgets/Menu";
import useAuth from "hooks/useAuth";
import config from './config'

const Menu: React.FC = (props) => {
  const { account } = useWeb3React()
  const { login, logout } = useAuth()
  return (
    <UikitMenu
      account={account as string | undefined}
      login={login}
      logout={logout}
      links={config()}
      {...props}
    />
  )
}

export default Menu