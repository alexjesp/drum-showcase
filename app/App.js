import React from 'react'
import Social from './views/Social'
import Logo from './views/Logo'
import AppBody from './views/AppBody'
import socialItems from './views/Social/socialItems'
import './App.css'

export default class App extends React.Component {
  render () {
    return (
      <div className='App'>
        <Logo />
        <AppBody />
        <Social items={socialItems} />
      </div>
    )
  }
}
