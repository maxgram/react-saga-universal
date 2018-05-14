const version = require('../../package.json').version
const CWD = process.cwd()
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./config.js')
const PORT = process.env.PORT

const development = {
  mode: 'development',
  devtool: 'inline-source-map', //'eval-cheap-module-source-map',

  entry: [
    'babel-polyfill',
    `webpack-hot-middleware/client?path=http://localhost:${PORT}/__webpack_hmr&timeout=15000`,
    path.resolve(CWD, './src/client.dev.js')
  ],

  output: {
    publicPath: '/dist/',
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            query: {
              modules: true,
              sourceMap: true,
              localIdentName: '[path]__[name]__[local]',
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: (loader) => [
                require('postcss-modules-values')(),
                require('postcss-nested')(),
                require('autoprefixer')(),
              ]
            }
          }
        ]
      },
    ]
  },
}

module.exports = merge(development, common)
