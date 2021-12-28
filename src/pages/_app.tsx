import React from 'react'
import { AppProps } from 'next/app'

import Layout from '../components/App'

import '../styles/global.css'

const App: React.FunctionComponent<AppProps> = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
)

export default App
