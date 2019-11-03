import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

import SocialItem from './SocialItem'
import './Social.css'

const Social = (props) => {
  const renderItem = (item, i) => {
    return (<SocialItem key={i} data={item} />)
  }
  const className = classnames('Social', props.className)
  return (
    <ul className={className}>
      {props.items.map(renderItem)}
    </ul>
  )
}

Social.propTypes = {
  items: PropTypes.array,
  classname: PropTypes.string
}

export default Social
