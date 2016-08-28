import { render } from 'react-dom'
import createRoot from './createRoot'
import './styles.css'

const root = document.createElement('div')
root.id = 'root'
document.body.appendChild(root)

renderApp()

if (module.hot) {
  module.hot.accept('./App', () => renderApp())
}

function renderApp () {
  render(createRoot(), root)
}
