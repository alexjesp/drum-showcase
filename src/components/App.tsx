import React from 'react'
import styled from 'styled-components'
import Head from 'next/head'

import { Social } from './Social'
import { socialItems } from '../data/socialItems'
import { Nav } from './Nav'
import { navItems } from '../data/navItems'

import { Logo } from './Logo'
import { Page } from './Page'

const AppContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  flex-direction: column;
  position: relative;
`

const AppContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  @media screen and (min-width: 740px) and (max-width: 1100px) {
    flex-wrap: wrap;
  }

  @media screen and (max-width: 740px) {
    align-items: center;
    flex-direction: column;
    padding: 0 1.5em 2em;
  }
`

const AppHeader = styled.div`
  display: flex;
  flex-direction: column;
  flex: none;
  width: 255px;
  margin-right: 3em;
  margin-top: 50px;

  @media screen and (min-width: 740px) and (max-width: 1100px) {
    width: 162px;
  }

  @media screen and (max-width: 740px) {
    margin: 0;
  }
`

const AppHeaderFixed = styled.div`
  position: fixed;
  top: 50px;

  @media screen and (max-width: 740px) {
    position: static;
  }
`

const AppBody = styled.div`
  padding-bottom: 6em;
  margin-top: 50px;
  flex: none;
  width: 550px;
  margin-right: 3em;

  @media screen and (min-width: 740px) and (max-width: 1100px) {
    width: 500px;
    margin-right: 0;
  }

  @media screen and (max-width: 740px) {
    padding: 0;
    margin: 0;
    margin-top: 4em;
    width: 100%;
  }
`

const SocialWrapper = styled.div`
  display: flex;
  height: 30px;
  flex: none;
  justify-content: center;
  width: 160px;
  margin-top: 50px;

  @media screen and (min-width: 740px) and (max-width: 1100px) {
    margin-bottom: 2em;
    width: 100%;
  }

  @media screen and (max-width: 740px) {
    justify-content: center;
    margin: 3em 0 0;
  }
`

const AppFooter = styled.div`
  margin-top: -2em;
  font-size: 13px;
  padding: 2em 0;
  text-align: center;
  width: 100%;
`

const TopBar = styled.div`
  border-top: 10px solid black;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 5;
`

const App: React.FunctionComponent = (props) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="Official site for professional musician, Alex Esp."
      />
      <title>Alex Esp | Musician</title>
    </Head>
    <AppContainer>
      <TopBar />
      <AppContent>
        <AppHeader>
          <AppHeaderFixed>
            <Logo />
            <Nav items={navItems} />
          </AppHeaderFixed>
        </AppHeader>
        <AppBody>
          <Page>{props.children}</Page>
        </AppBody>
        <SocialWrapper>
          <Social items={socialItems} />
        </SocialWrapper>
      </AppContent>
      <AppFooter>&copy; Alexander Esp {new Date().getFullYear()}</AppFooter>
    </AppContainer>
  </>
)

export default App
