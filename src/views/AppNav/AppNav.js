import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'
import './AppNav.css'

const AppNav = (props) => {
  const renderAppNavItem = (data, i) => {
    return (<AppNavItem key={i} data={data} />)
  }
  return (
    <ul className='AppNav'>
      {props.items.map(renderAppNavItem)}
    </ul>
  )
}

AppNav.propTypes = {
  items: PropTypes.array
}

const AppNavItem = (props) => {
  return (
    <li className='AppNav-item'>
      <A {...props} />
    </li>
  )
}

const A = (props) => {
  const { data } = props
  if (data.external) {
    return (
      <a className='AppNav-itemLink' href={data.href} target='_blank' rel="noopener noreferrer">{data.title}</a>
    )
  }
  return (
    <Link className='AppNav-itemLink' to={data.href}>{data.title}</Link>
  )
}

AppNavItem.propTypes = {
  data: PropTypes.object
}

export default AppNav
