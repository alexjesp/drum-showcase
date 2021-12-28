import React from 'react'
import styled from 'styled-components'

import { releases } from '../data/releaseItems'

const ReleaseList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;

  @media screen and (max-width: 740px) {
    font-size: 13px;
    line-height: 1.3;
  }
`

const ReleaseItem = styled.li`
  display: flex;
  margin-bottom: 3em;
  width: 100%;
`

const ReleaseTitle = styled.h2`
  font-size: 1.2em;
  line-height: 1.3;
  margin-bottom: 0.2em;

  @media screen and (max-width: 740px) {
    line-height: 1.2;
    font-size: 18px;
    margin-bottom: 0.4em;
  }
`

const ReleaseArtist = styled.h3`
  font-size: 0.9em;
  line-height: 1.5;
  font-weight: 400;
  margin-bottom: 1em;
`

const ReleaseType = styled.span`
  font-size: 1em;
  color: rgba(0, 0, 0, 0.7);
`

const ReleaseImageLink = styled.a`
  margin-right: 2em;
  transition: 0.2s opacity linear;
  width: 35%;
  flex: none;
  max-width: 200px;
  min-width: 100px;

  &:hover {
    opacity: 0.8;
  }

  @media screen and (max-width: 740px) {
    min-width: 75px;
  }
`

const ReleaseInfo = styled.div`
  flex: 1;
`

const ReleaseImage = styled.img`
  width: 100%;
  height: auto;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);
`

const ReleaseDescription = styled.p`
  color: rgba(0, 0, 0, 0.7);
  font-size: 1em;
  white-space: pre-wrap;

  @media screen and (max-width: 740px) {
    font-size: 12px;
    line-height: 1.2;
  }
`

const Releases = () => (
  <>
    <ReleaseList>
      {releases.map((data, i) => (
        <ReleaseItem key={i}>
          <ReleaseImageLink
            href={data.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ReleaseImage
              src={data.imgSrc}
              alt={`${data.title} - ${data.artist} - ${data.description}`}
            />
          </ReleaseImageLink>
          <ReleaseInfo>
            <ReleaseTitle>{data.title}</ReleaseTitle>
            <ReleaseArtist>
              {data.artist} <ReleaseType>({data.type})</ReleaseType>
            </ReleaseArtist>
            <ReleaseDescription>{data.description}</ReleaseDescription>
          </ReleaseInfo>
        </ReleaseItem>
      ))}
    </ReleaseList>
  </>
)

export default Releases
