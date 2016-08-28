var webpack = require('webpack')
var resolve = require('path').resolve
var env = process.env.NODE_ENV || 'development'

module.exports = {
  context: __dirname,
  entry: [
    'react-hot-loader/patch',
    './app/main.js'
  ],
  resolve: {
    root: resolve(__dirname, './app'),
    fallback: resolve(__dirname, './node_modules')
  },
  resolveLoader: {
    fallback: resolve(__dirname, './node_modules')
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"' + env + '"'
    }),
    new webpack.NoErrorsPlugin()
  ],
  devtool: 'cheap-module-source-map',
  output: {
    path: resolve(__dirname, 'public'),
    publicPath: '/public/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel' },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.(eot|svg|woff|ttf)(#\w+)?$/, loader: 'url-loader' }
    ]
  }
}
