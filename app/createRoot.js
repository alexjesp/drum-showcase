import React from 'react'
import { AppContainer } from 'react-hot-loader'
import { Router, Route, browserHistory } from 'react-router'
import App from './App'

export default function createRoot () {
  return (
    <AppContainer>
      <Router history={browserHistory}>
        <Route path='/' component={App}>
          <Route path='/:pageType' component={App} />
        </Route>
      </Router>
    </AppContainer>
  )
}
