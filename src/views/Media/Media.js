import React from 'react'
import './Media.css'

class Media extends React.Component {
  render () {
    return (
      <div className='Media'>
        <div className='Media-videoWrapper'>
          <iframe title='holy-mountain' width='560' height='315' src='https://www.youtube.com/embed/jLj5Z8UWLT8?VQ=HD1080&showinfo=0&autoplay=1&modestbranding=1' frameBorder='0' allowFullScreen />
        </div>
        <div className='Media-credit'>Video by <a className='Media-creditLink' href='http://simontreasure.com' target='_blank' rel="noopener noreferrer">Simon Treasure</a>. Original audio by <a href='http://thomashillrecording.com' target='_blank' rel="noopener noreferrer">Tom Hill</a></div>
        <img className='Media-image' src='/images/tyc-lp1-launch.jpg' alt="Alex Esp performing at The Yacht Club's album launch" />
        <div className='Media-credit'>Photo by <a className='Media-creditLink' href='http://simontreasure.com' target='_blank' rel="noopener noreferrer">Simon Treasure</a></div>
        <img className='Media-image' src='/images/20707168_10155534017635396_1439614710_oEDIT.jpg' alt='Alex Esp recording The Yacht Club LP1 at Holy Mountain Studios'/>
        <div className='Media-credit'>Photo by <a className='Media-creditLink' href='http://simontreasure.com' target='_blank' rel="noopener noreferrer">Simon Treasure</a></div>
        <img className='Media-image' src='/images/theyachtclub-fall-promo.jpg' alt='Alex Esp in The Yacht Club Fall band shot in a field' />
        <div className='Media-credit'>Photo by <a className='Media-creditLink' href='https://www.facebook.com/CatherineBridgmanPhotographer' target='_blank' rel="noopener noreferrer">Catherine Bridgman</a></div>
        <img className='Media-image' src='/images/IMG_6194.JPG' alt='Alex Esp recording The Yacht Club LP1 at Holy Mountain Studios' />
        <div className='Media-credit'>Photo by <a className='Media-creditLink' href='http://simontreasure.com' target='_blank' rel="noopener noreferrer">Simon Treasure</a></div>
        <img className='Media-image' src='/images/gmisadventure-still.jpg' alt="Alex Esp playing in The Yacht Club's Greatest Misadventure music video" />
        <img className='Media-image' src='/images/motb-video.jpg' alt="Alex Esp playing in The Yacht Club's Mouth of the Beast music video" />
        <img className='Media-image' src='/images/c2c.jpg' alt='Alex Esp performing at C2C festival' />
        <div className='Media-videoWrapper'>
          <iframe title='mouth-of-the-beast' width='560' height='315' src='https://www.youtube.com/embed/p2E2qEtytTY?VQ=HD720' frameBorder='0' allowFullScreen />
        </div>
        <div className='Media-videoWrapper'>
          <iframe title='greatest-misadventure' width='560' height='315' src='https://www.youtube.com/embed/F-M81FVcV7U?VQ=HD720' frameBorder='0' allowFullScreen />
        </div>
        <div className='Media-videoWrapper'>
          <iframe title='talk' width='560' height='315' src='https://www.youtube.com/embed/sqIIejUIQfc?VQ=HD720' frameBorder='0' allowFullScreen />
        </div>
      </div>
    )
  }
}

export default Media
