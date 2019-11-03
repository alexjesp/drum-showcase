import React from 'react'
import PropTypes from 'prop-types'

import { releases } from './releaseItems'
import './Releases.css'

export const Releases = () => {
  const renderRelease = (item, i) => {
    return (<Release key={i} data={item} />)
  }
  return (
    <ul className='Releases'>
      {releases.map(renderRelease)}
    </ul>
  )
}

const Release = (props) => {
  const { data } = props
  return (
    <li className='Release'>
      <a className='Release-imageLink' href={data.href} target='_blank' rel="noopener noreferrer">
        <img className='Release-image' src={data.imgSrc} alt={`${data.title} - ${data.artist} - ${data.description}`} />
      </a>
      <div className='Release-info'>
        <h2 className='Release-title'>{data.title}</h2>
        <h3 className='Release-artist'>{data.artist} <span className='Release-type'>({data.type})</span></h3>
        <p className='Release-description'>{data.description}</p>
      </div>
    </li>
  )
}

Release.propTypes = {
  data: PropTypes.object
}
