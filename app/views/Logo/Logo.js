import React from 'react'
import { Link } from 'react-router'
import './Logo.css'

const Logo = () => {
  return (
    <h1 className='Logo'>
      <Link className='Logo-link' to='/'>
        <span className='Logo-big'>Alex</span>
        <div className='Logo-smallWrapper'>
          <span className='Logo-small'>Esp</span>
        </div>
      </Link>
    </h1>
  )
}

export default Logo
