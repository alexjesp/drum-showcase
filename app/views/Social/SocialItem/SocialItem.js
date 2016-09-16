import React, { PropTypes } from 'react'
import './SocialItem.css'

const SocialItem = (props, i) => {
  const { data } = props
  const style = {
    ...data.style,
    backgroundImage: `url(${data.imgPath})`
  }
  return (
    <li key={i} className='SocialItem'>
      <a
        className='SocialItem-link'
        href={data.href}
        style={style}
        target='_blank'>
        {data.name}
      </a>
    </li>
  )
}

SocialItem.propTypes = {
  data: PropTypes.object
}

export default SocialItem
