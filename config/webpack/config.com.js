const CWD = process.cwd()
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')

const development = require('./config.dev.js')
const production = require('./config.prod.js')

const common = {
  output: {
    path: path.resolve(CWD, 'dist'),
    publicPath: '/dist/',
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'stage-2', 'react'],
            plugins: ['transform-decorators-legacy', 'transform-runtime']
          }
        }],
      },
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
        // modules under node_modules are bundled into vendor.js
        return module.context && module.context.indexOf('node_modules') !== -1;
      }
    }),
  ],
}

if      (process.env.NODE_ENV === 'development')  module.exports = merge(development, common)
else if (process.env.NODE_ENV === 'production')   module.exports = merge(production, common)

