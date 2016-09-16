import classnames from 'classnames'
import React, { PropTypes } from 'react'
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
