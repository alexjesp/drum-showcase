import React from 'react'
import axios from 'axios'
import './Media.css'

class Media extends React.Component {
  componentWillMount () {
    // axios.get('/instagram-data')
  }

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
