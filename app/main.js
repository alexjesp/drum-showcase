import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './App'
import './styles.css'

const root = document.createElement('div')
root.id = 'root'
document.body.appendChild(root)

render(<AppContainer><App /></AppContainer>, root)

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    render(<AppContainer><NextApp /></AppContainer>, root)
  })
}
