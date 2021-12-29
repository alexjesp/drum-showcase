import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'

import Layout from '../components/Layout'

import '../styles/global.css'

const App: React.FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
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
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default App
