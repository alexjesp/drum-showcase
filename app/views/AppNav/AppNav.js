import React, { PropTypes } from 'react'
import { Link } from 'react-router'
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
  const { data } = props
  return (
    <li className='AppNav-item'>
      <Link className='AppNav-itemLink' to={data.href}>{data.title}</Link>
    </li>
  )
}

AppNavItem.propTypes = {
  data: PropTypes.object
}

export default AppNav
