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
    alias: {
      react: resolve(__dirname, './node_modules/react')
    },
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
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.(eot|svg|woff|ttf)(#\w+)?$/, loader: 'url-loader' }
    ]
  }
}
