import React from 'react'
import { Route } from 'react-router'
import { BrowserRouter, Switch } from 'react-router-dom'
import { App } from './App'

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/:pageType' component={App} />
      <Route path="/" component={App} />
    </Switch>
  </BrowserRouter>
)
