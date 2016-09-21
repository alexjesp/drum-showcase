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
        <div className='Media-videoWrapper'>
          <iframe width='560' height='315' src='https://www.youtube.com/embed/sqIIejUIQfc?VQ=HD720' frameBorder='0' allowFullScreen />
        </div>
      </div>
    )
  }
}

export default Media
