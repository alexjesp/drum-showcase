import React, { PropTypes } from 'react'
import './Social.css'

const Social = (props) => {
  const renderItem = (item, i) => {
    return (<SocialItem key={i} data={item} />)
  }
  return (
    <ul className='Social'>
      {props.items.map(renderItem)}
    </ul>
  )
}

Social.propTypes = {
  items: PropTypes.array
}

const SocialItem = (props, i) => {
  const { data } = props
  const style = {
    ...data.style,
    backgroundImage: `url(${data.imgPath})`
  }
  return (
    <li key={i} className='Social-item'>
      <a
        className='Social-itemLink'
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

export default Social
