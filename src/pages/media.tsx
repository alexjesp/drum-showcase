import React from 'react'
import styled from 'styled-components'

const ImgCredit = styled.div`
  font-size: 12px;
  color: #444;
  text-align: right;
`

const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  padding-top: 25px;
  height: 0;
  margin-bottom: 2em;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  & + ${ImgCredit} {
    margin-top: -2em;
    margin-bottom: 2em;
  }
`

const Img = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 2em;

  & + ${ImgCredit} {
    margin-top: -2em;
    margin-bottom: 2em;
  }
`

const CreditLink = styled.a`
  color: #000;
`

const Media = () => (
  <>
    <VideoWrapper>
      <iframe
        title="holy-mountain"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/jLj5Z8UWLT8?VQ=HD1080&showinfo=0&autoplay=1&modestbranding=1"
        frameBorder="0"
        allowFullScreen
      />
    </VideoWrapper>
    <ImgCredit>
      Video by{' '}
      <CreditLink
        href="http://simontreasure.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Simon Treasure
      </CreditLink>
      . Original audio by{' '}
      <a
        href="http://thomashillrecording.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Tom Hill
      </a>
    </ImgCredit>
    <Img
      src="/images/tyc-lp1-launch.jpg"
      alt="Alex Esp performing at The Yacht Club's album launch"
    />
    <ImgCredit>
      Photo by{' '}
      <CreditLink
        href="http://simontreasure.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Simon Treasure
      </CreditLink>
    </ImgCredit>
    <Img
      src="/images/20707168_10155534017635396_1439614710_oEDIT.jpg"
      alt="Alex Esp recording The Yacht Club LP1 at Holy Mountain Studios"
    />
    <ImgCredit>
      Photo by{' '}
      <CreditLink
        href="http://simontreasure.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Simon Treasure
      </CreditLink>
    </ImgCredit>
    <Img
      src="/images/theyachtclub-fall-promo.jpg"
      alt="Alex Esp in The Yacht Club Fall band shot in a field"
    />
    <ImgCredit>
      Photo by{' '}
      <CreditLink
        href="https://www.facebook.com/CatherineBridgmanPhotographer"
        target="_blank"
        rel="noopener noreferrer"
      >
        Catherine Bridgman
      </CreditLink>
    </ImgCredit>
    <Img
      src="/images/IMG_6194.jpg"
      alt="Alex Esp recording The Yacht Club LP1 at Holy Mountain Studios"
    />
    <ImgCredit>
      Photo by{' '}
      <CreditLink
        href="http://simontreasure.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Simon Treasure
      </CreditLink>
    </ImgCredit>
    <Img
      src="/images/gmisadventure-still.jpg"
      alt="Alex Esp playing in The Yacht Club's Greatest Misadventure music video"
    />
    <Img
      src="/images/motb-video.jpg"
      alt="Alex Esp playing in The Yacht Club's Mouth of the Beast music video"
    />
    <Img src="/images/c2c.jpg" alt="Alex Esp performing at C2C festival" />
    <VideoWrapper>
      <iframe
        title="mouth-of-the-beast"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/p2E2qEtytTY?VQ=HD720"
        frameBorder="0"
        allowFullScreen
      />
    </VideoWrapper>
    <VideoWrapper>
      <iframe
        title="greatest-misadventure"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/F-M81FVcV7U?VQ=HD720"
        frameBorder="0"
        allowFullScreen
      />
    </VideoWrapper>
    <VideoWrapper>
      <iframe
        title="talk"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/sqIIejUIQfc?VQ=HD720"
        frameBorder="0"
        allowFullScreen
      />
    </VideoWrapper>
  </>
)

export default Media
