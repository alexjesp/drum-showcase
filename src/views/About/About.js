import React from 'react'
import { ReactComponent as AboutImg } from '../../images/IMG_2921.JPG'
import './About.css'

const About = () => {
  return (
    <div className='About'>
      <AboutImg className='About-img' src='../../images/IMG_2921.JPG' alt='Alexander Esp playing piano in a denim jacket at Bookhouse Studios' />
      <div className='About-imgCredit'>Photo by Treasure Digital.</div>
    </div>
  )
}

export default About
