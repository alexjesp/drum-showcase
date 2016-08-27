import React, { PropTypes } from 'react'
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
      <a className='AppNav-itemLink' href={data.href}>{data.title}</a>
    </li>
  )
}

AppNavItem.propTypes = {
  data: PropTypes.object
}

export default AppNav
