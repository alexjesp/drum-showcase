const express = require('express')
const compression = require('compression')
const webpackServer = require('./webpack')
const resolve = require('path').resolve
const app = express()
const PORT = 2000

app.use(compression())

app.use(express.static('public', { maxAge: 24 * 60 * 60 * 1000 }))

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
  console.log(`Server listening on port ${PORT}`)
})
