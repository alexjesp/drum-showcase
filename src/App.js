import React from 'react'
import { useParams } from 'react-router'
import PropTypes from 'prop-types'

import { Social } from './views/Social'
import { Logo } from './views/Logo'
import { AppNav } from './views/AppNav'
import { Page } from './views/Page'
import { navItems } from './views/AppNav/navItems'
import { socialItems } from './views/Social/socialItems'
import './App.css'

export const App = () => {
  const { pageType = 'about' } = useParams()
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
