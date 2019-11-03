import React from 'react'
import { Route } from 'react-router'
import { BrowserRouter, Switch } from 'react-router-dom'
import { App } from './App'

export default function Routes () {
  return (
    <BrowserRouter>
    <Switch>
      <Route path='/:pageType' component={App} />
      <Route path="/" component={App} />
    </Switch>
    </BrowserRouter>
  )
}
