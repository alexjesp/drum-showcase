import React from 'react'
import aboutSrc from '../../images/IMG_2921.JPG'
import './About.css'

export const About = () => (
  <div className='About'>
    <img className='About-img' src={aboutSrc} alt='Alexander Esp playing piano in a denim jacket at Bookhouse Studios' />
    <div className='About-imgCredit'>Photo by Treasure Digital.</div>
  </div>
)
