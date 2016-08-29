var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('../webpack.config.js')

module.exports = function webpackServer (app) {
  var compiler = webpack(config)

  var middleware = webpackDevMiddleware(compiler, {
    outputPath: config.output.path,
    stats: { colors: true },
    noInfo: false,
    quiet: false
  })

  app.use(middleware)
  app.use(webpackHotMiddleware(compiler))

  return {
    invalidate () {
      middleware && middleware.invalidate()
    }
  }
}
