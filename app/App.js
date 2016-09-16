import React, { PropTypes } from 'react'
import Social from './views/Social'
import Logo from './views/Logo'
import AppNav from './views/AppNav'
import Page from './views/Page'
import navItems from './views/AppNav/navItems'
import socialItems from './views/Social/socialItems'
import './App.css'

const App = ({ params }) => {
  const pageType = params.pageType || 'about'
  return (
    <div className='App'>
      <div className='App-content'>
        <div className='App-header'>
          <Logo />
          <AppNav items={navItems} />
        </div>
        <Page className='App-body' pageType={pageType} />
        <Social className='App-social' items={socialItems} />
      </div>
      <AppFooter />
      <div className='App-topBar' />
    </div>
  )
}

App.propTypes = {
  params: PropTypes.object
}

const AppFooter = () => {
  const year = (new Date()).getFullYear()
  return (
    <div className='App-footer'>
      Site and design by Alexander Esp &copy; {year}
    </div>
  )
}

export default App
