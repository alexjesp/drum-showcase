const express = require('express')
const webpackServer = require('./webpack')
const resolve = require('path').resolve
const app = express()
const PORT = 2000

app.use(express.static('public'))

webpackServer(app)

app.get('/:pageType', (req, res) => {
  res.sendFile(resolve(__dirname, '..', 'public', 'index.html'))
})

app.get('*', (req, res) => {
  res.status(404)

  if (res.format('html')) {
    res.redirect(301, '/')
  }
})

app.listen(PORT, () => {
  console.log(`Server lisening on port ${PORT}`)
})
