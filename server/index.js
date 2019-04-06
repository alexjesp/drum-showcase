const express = require('express')
const webpackServer = require('./webpack')
const resolve = require('path').resolve
const app = express()
const PORT = 2000

app.use(express.static('public', { maxAge: 24 * 60 * 60 * 1000 }))

webpackServer(app)

app.get('/:pageType', (req, res) => {
  res.sendFile(resolve(__dirname, '..', 'public', 'index.html'))
})

app.get('*', (req, res) => {
  if (res.format && res.format('html')) {
    res.redirect(301, '/')
  } else {
    res.status(404)
  }
})

app.get('/*.js', resolveWithGzippedFile)
app.get('/*.css', resolveWithGzippedFile)

function resolveWithGzippedFile (req, res, next) {
  req.url = `${req.url}.gz`
  res.set('Content-Encoding', 'gzip')
  next()
}

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
