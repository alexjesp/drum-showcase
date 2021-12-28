import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const LogoContainer = styled.h1`
  align-items: center;
  display: flex;
  text-transform: uppercase;
  font-family: BebasNeueRegular;
  font-size: 110px;
  height: 0.75em;
  width: 2.32em;
  overflow: hidden;
  justify-content: center;
  -webkit-user-select: none;
  margin: 0;
  font-weight: normal;

  @media screen and (min-width: 740px) and (max-width: 1100px) {
    font-size: 80px;
  }

  @media screen and (max-width: 740px) {
    justify-content: center;
    margin-top: 0.5em;
  }
`

const LogoLink = styled(Link)`
  display: flex;
  margin-top: 0.1em;
`

const LogoBig = styled.span`
  font-size: 1em;
`

const LogoSmallWrapper = styled.span`
  display: inline-block;
  margin-top: 0.19em;
  margin-left: 0.05em;
  border-top: 0.17em solid black;
`

const LogoSmall = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.65em;
  line-height: 1.12;
  margin: -0.02em;
`

export const Logo: React.FunctionComponent = () => (
  <LogoContainer>
    <LogoLink href="/" passHref>
      <a>
        <LogoBig>Alex</LogoBig>
        <LogoSmallWrapper>
          <LogoSmall>Esp</LogoSmall>
        </LogoSmallWrapper>
      </a>
    </LogoLink>
  </LogoContainer>
)
