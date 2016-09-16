import React, { PropTypes } from 'react'
import items from './releaseItems'
import './Releases.css'

const Releases = () => {
  const renderRelease = (item, i) => {
    return (<Release key={i} data={item} />)
  }
  return (
    <ul className='Releases'>
      {items.map(renderRelease)}
    </ul>
  )
}

const Release = (props) => {
  const { data } = props
  return (
    <li className='Release'>
      <a className='Release-imageLink' href={data.href} target='_blank'>
        <img className='Release-image' src={data.imgSrc} />
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

export default Releases
