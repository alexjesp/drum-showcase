import classnames from 'classnames'
import React, { PropTypes } from 'react'
import './SocialItem.css'
const icons = {
  twitter: require('../icons/twitter.svg'),
  github: require('../icons/github.svg'),
  instagram: require('../icons/instagram.svg'),
  youtube: require('../icons/youtube.svg')
}

const SocialItem = (props, i) => {
  const { data } = props
  const className = classnames('SocialItem', {
    [`SocialItem--${data.name}`]: true
  })
  return (
    <li key={i} className={className}>
      <a
        className='SocialItem-link'
        href={data.href}
        target='_blank'
        dangerouslySetInnerHTML={{__html: icons[data.name]}}
      />
    </li>
  )
}

SocialItem.propTypes = {
  data: PropTypes.object
}

export default SocialItem
