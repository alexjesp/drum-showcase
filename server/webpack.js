var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var config = require('../webpack.config.js')

module.exports = function webpackServer (app) {
  if (process.env.NODE_ENV === 'production') {
    return app
  }
  var compiler = webpack(config)

  var middleware = webpackDevMiddleware(compiler, {
    outputPath: config.output.publicPath,
    stats: { colors: true },
    noInfo: false,
    quiet: false
  })

  app.use(middleware)
}
