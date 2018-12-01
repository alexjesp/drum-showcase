import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='About'>
      <div className='Media-videoWrapper'>
        <iframe width='560' height='315' src='https://www.youtube.com/embed/MBnEs3CY994?VQ=HD1080&showinfo=0&autoplay=1&modestbranding=1' frameBorder='0' allowFullScreen />
      </div>
      <div className='About-imgCredit'>Video by Kamaji Studios.</div>
    </div>
  )
}

export default About
