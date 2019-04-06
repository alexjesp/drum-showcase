const webpack = require('webpack')
const { resolve } = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
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
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    }),
    new CompressionPlugin()
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
      {
        test: /\.css$/,
        use: [
          env === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                require('cssnano')()
              ]
            }
          }
        ]
      },
      { test: /\.(eot|woff|ttf|png)(#\w+)?$/, use: 'url-loader' },
      { test: /\.svg$/, use: ['svg-inline-loader'] }
    ]
  }
}
