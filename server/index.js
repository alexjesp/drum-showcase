const express = require('express')
const path = require('path')

const app = express()
const PORT = 2000
const ACCEPTED_PAGE_TYPES = ['about', 'releases', 'media']

app.use(express.static(path.join(__dirname, '..', 'build'), { maxAge: 24 * 60 * 60 * 1000 }))

app.get('/:pageType', (req, res, next) => {
  if (ACCEPTED_PAGE_TYPES.includes(req.params.pageType)) {
    res.sendFile(path.join(__dirname, '..', 'build', 'index.html'))
  } else {
    next()
  }
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'))
})

app.get('*', (req, res) => {
  if (req.accepts('html')) {
    res.redirect(301, '/')
  } else {
    res.status(404)
  }
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
