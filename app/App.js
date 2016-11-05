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
  const year = (new Date()).getFullYear()

  return (
    <div className='App'>
      <div className='App-topBar' />
      <div className='App-content'>
        <div className='App-header'>
          <div className='App-headerFixed'>
            <Logo />
            <AppNav items={navItems} />
          </div>
        </div>
        <Page className='App-body' pageType={pageType} />
        <div className='App-social'>
          <Social items={socialItems} />
        </div>
      </div>
      <div className='App-footer'>&copy; Alexander Esp {year}</div>
    </div>
  )
}

App.propTypes = {
  params: PropTypes.object
}

export default App
