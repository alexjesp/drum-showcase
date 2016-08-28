var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var config = require('../webpack.config.js')

module.exports = function webpackServer (app) {
  var compiler = webpack(config)
  app.use(webpackDevMiddleware(compiler, {
    outputPath: config.output.path,
    stats: { colors: true },
    noInfo: false,
    quiet: false
  }))
  return app
}
