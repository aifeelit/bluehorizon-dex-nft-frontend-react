import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { Web3ReactProvider } from "@web3-react/core";
import { light, ModalProvider } from "uikit";
import { getLibrary } from "./utils/web3React";
import { ToastsProvider } from "./contexts/ToastsContext";
import { RefreshContextProvider } from './contexts/RefreshContext'
import store from "./state";

const ThemeProviderWrapper = (props: any) => {
  return <ThemeProvider theme={light} {...props} />
}

const Providers: React.FC = ({ children }) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Provider store={store}>
        <ToastsProvider>
          <ThemeProviderWrapper>
            <ModalProvider>
              <RefreshContextProvider>
                {children}
              </RefreshContextProvider>
            </ModalProvider>
          </ThemeProviderWrapper>
        </ToastsProvider>
      </Provider>
    </Web3ReactProvider>
  )
}

export default Providers