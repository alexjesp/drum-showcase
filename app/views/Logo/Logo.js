import React from 'react'
import './Logo.css'

export default class Logo extends React.Component {
  render () {
    return (
      <div className='Logo'>
        <span className='Logo-big'>Alex</span>
        <span className='Logo-small'>Esp</span>
      </div>
    )
  }
}
