import React from 'react'
import Social from './views/Social'
import Logo from './views/Logo'
import AppNav from './views/AppNav'
import AppBody from './views/AppBody'
import navItems from './views/AppNav/navItems'
import socialItems from './views/Social/socialItems'
import './App.css'

export default class App extends React.Component {
  render () {
    return (
      <div className='App'>
        <Logo />
        <AppNav items={navItems} />
        <AppBody />
        <Social items={socialItems} />
      </div>
    )
  }
}
