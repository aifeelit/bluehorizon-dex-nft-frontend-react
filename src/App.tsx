import React, { lazy } from 'react'
import { Router, Redirect, Route, Switch } from 'react-router-dom'
import { ResetCSS } from 'uikit'
import Home from 'views/Home'
import NotFound from 'views/NotFound'
import GlobalStyle from './style/Global'
import useEagerConnect from './hooks/useEagerConnect'
import Menu from './components/Menu'
import Swap from './views/Swap'
import history from './routerHistory'
// const NotFound = lazy(() => import('./views/NotFound'))
// const Home = lazy(() => import('./views/Home'))

const App: React.FC = () => {
  useEagerConnect()

  return (
    <Router history={history}>
      <ResetCSS />
      <GlobalStyle />
      <Menu>
        <Switch>
          <Route path="/home" exact>
            <Home />
          </Route>
          <Route exact path="/swap">
            <Swap/>
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          {/* 404 */}
          <Route component={NotFound} />
        </Switch>
      </Menu>
    </Router>
  )
}

export default React.memo(App)