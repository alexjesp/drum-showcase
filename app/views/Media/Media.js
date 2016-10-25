import React from 'react'
import './Media.css'

class Media extends React.Component {
  render () {
    return (
      <div className='Media'>
        <div className='Media-instagramFeed' ref='instagramFeed' />
        <div className='Media-videoWrapper'>
          <iframe width='560' height='315' src='https://www.youtube.com/embed/p2E2qEtytTY?VQ=HD720' frameBorder='0' allowFullScreen />
        </div>
        <img className='Media-image' src='/images/theyachtclub-fall-promo.jpg' />
        <div className='Media-credit'>Photo taken by <a className='Media-creditLink' href='https://www.facebook.com/CatherineBridgmanPhotographer' target='_blank'>Catherine Bridgman</a></div>
        <div className='Media-videoWrapper'>
          <iframe width='560' height='315' src='https://www.youtube.com/embed/sqIIejUIQfc?VQ=HD720' frameBorder='0' allowFullScreen />
        </div>
        <img className='Media-image' src='/images/c2c.jpg' />
        <img className='Media-image' src='/images/gmisadventure-still.jpg' />
      </div>
    )
  }
}

export default Media
