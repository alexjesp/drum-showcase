import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'
import './Logo.css'

export const Logo = props => {
  const { isHome } = props
  const className = classnames('Logo', {
    'Logo--small': isHome
  })
  return (
    <h1 className={className}>
      <Link className='Logo-link' to='/'>
        <span className='Logo-big'>Alex</span>
        <div className='Logo-smallWrapper'>
          <span className='Logo-small'>Esp</span>
        </div>
      </Link>
    </h1>
  )
}

Logo.propTypes = {
  isHome: PropTypes.bool
}
