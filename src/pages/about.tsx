import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import bookhouseImgSrc from '../../public/images/IMG_2921.jpg'

const ImgCredit = styled.div`
  font-size: 12px;
  color: #444;
  text-align: right;
  margin-top: 1em;
  margin-bottom: 2em;
`

const About = () => (
  <>
    <Image
      src={bookhouseImgSrc}
      alt="Alexander Esp playing piano in a denim jacket at Bookhouse Studios"
      layout="responsive"
    />
    <ImgCredit>Photo by Treasure Digital.</ImgCredit>
  </>
)

export default About
