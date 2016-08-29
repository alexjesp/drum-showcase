import React, { PropTypes } from 'react'
import Social from './views/Social'
import Logo from './views/Logo'
import AppNav from './views/AppNav'
import Page from './views/Page'
import navItems from './views/AppNav/navItems'
import socialItems from './views/Social/socialItems'
import './App.css'

const App = (props) => {
  const { params } = props
  const year = (new Date()).getFullYear()
  return (
    <div className='App'>
      <div className='App-header'>
        <Logo isHome={!!params.pageType} />
        <Social items={socialItems} />
      </div>
      <div className='App-body'>
        <AppNav items={navItems} />
        <Page pageType={params.pageType} />
      </div>
      <div className='App-footer'>
        Site and design by Alexander Esp &copy; {year}
      </div>
    </div>
  )
}

App.propTypes = {
  params: PropTypes.object
}

export default App
