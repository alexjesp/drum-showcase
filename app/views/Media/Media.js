import React from 'react'
import './Media.css'

class Media extends React.Component {
  render () {
    return (
      <div className='Media'>
        <div className='Media-videoWrapper'>
          <iframe width='560' height='315' src='https://www.youtube.com/embed/jLj5Z8UWLT8?VQ=HD1080&showinfo=0&autoplay=1&modestbranding=1' frameBorder='0' allowFullScreen />
        </div>
        <div className='Media-credit'>Video by <a className='Media-creditLink' href='http://simontreasure.com' target='_blank'>Simon Treasure</a>. Original audio by <a href='http://thomashillrecording.com' target='_blank'>Tom Hill</a></div>
        <img className='Media-image' src='/images/tyc-lp1-launch.jpg' />
        <div className='Media-credit'>Photo by <a className='Media-creditLink' href='http://simontreasure.com' target='_blank'>Simon Treasure</a></div>
        <img className='Media-image' src='/images/20707168_10155534017635396_1439614710_oEDIT.jpg' />
        <div className='Media-credit'>Photo by <a className='Media-creditLink' href='http://simontreasure.com' target='_blank'>Simon Treasure</a></div>
        <img className='Media-image' src='/images/theyachtclub-fall-promo.jpg' />
        <div className='Media-credit'>Photo by <a className='Media-creditLink' href='https://www.facebook.com/CatherineBridgmanPhotographer' target='_blank'>Catherine Bridgman</a></div>
        <img className='Media-image' src='/images/IMG_6194.JPG' />
        <div className='Media-credit'>Photo by <a className='Media-creditLink' href='http://simontreasure.com' target='_blank'>Simon Treasure</a></div>
        <img className='Media-image' src='/images/gmisadventure-still.jpg' />
        <img className='Media-image' src='/images/motb-video.jpg' />
        <img className='Media-image' src='/images/c2c.jpg' />
        <div className='Media-videoWrapper'>
          <iframe width='560' height='315' src='https://www.youtube.com/embed/p2E2qEtytTY?VQ=HD720' frameBorder='0' allowFullScreen />
        </div>
        <div className='Media-videoWrapper'>
          <iframe width='560' height='315' src='https://www.youtube.com/embed/F-M81FVcV7U?VQ=HD720' frameBorder='0' allowFullScreen />
        </div>
        <div className='Media-videoWrapper'>
          <iframe width='560' height='315' src='https://www.youtube.com/embed/sqIIejUIQfc?VQ=HD720' frameBorder='0' allowFullScreen />
        </div>
      </div>
    )
  }
}

export default Media
