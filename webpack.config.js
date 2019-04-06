const webpack = require('webpack')
const { resolve } = require('path')
const env = process.env.NODE_ENV || 'development'

module.exports = {
  context: __dirname,
  mode: env === 'development' ? 'development' : 'production',
  entry: [
    './app/main.js'
  ],
  resolve: {
    alias: {
      react: resolve(__dirname, './node_modules/react')
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"' + env + '"'
    })
  ],
  devtool: env === 'development' ? 'cheap-module-source-map' : false,
  output: {
    path: resolve(__dirname, 'public'),
    publicPath: '/public/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: ['babel-loader'] },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.(eot|woff|ttf|png)(#\w+)?$/, use: ['url-loader'] },
      { test: /\.svg$/, use: ['svg-inline-loader'] }
    ]
  }
}
