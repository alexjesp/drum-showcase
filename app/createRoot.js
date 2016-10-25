import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import App from './App'

export default function createRoot () {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <Route path='/:pageType' component={App} />
      </Route>
    </Router>
  )
}
