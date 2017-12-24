import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='About'>
      <div className='Media-videoWrapper'>
        <iframe width='560' height='315' src='https://www.youtube.com/embed/jLj5Z8UWLT8?VQ=HD1080&showinfo=0&autoplay=1&modestbranding=1' frameBorder='0' allowFullScreen />
      </div>
      <div className='About-imgCredit'>Footage by <a href='http://simontreasure.com' target='_blank'>Simon Treasure</a>. Original audio by <a href='http://thomashillrecording.com' target='_blank'>Tom Hill</a></div>
    </div>
  )
}

export default About
