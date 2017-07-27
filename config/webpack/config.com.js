const CWD = process.cwd()
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin')

const development = require('./config.dev.js')
const production = require('./config.prod.js')
const aliases = require('../aliases').resolve.alias

const common = {
  output: {
    path: path.resolve(CWD, 'dist'),
    publicPath: '/dist/',
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },

  resolve: {
    extensions: ['.js', '.json', '.css'],
    alias: aliases
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
      //
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
        if(module.resource && (/^.*\.(css|svg)$/).test(module.resource)) {
          return false
        }
        // modules under node_modules are bundled into vendor.js
        return module.context && module.context.indexOf('node_modules') !== -1
      }
    }),

    new SVGSpritemapPlugin({
      src: path.resolve(CWD, './static/svg/**/*.svg'),
      prefix: 'sprite-',
      svgo: {
        plugins: [{
          removeTitle:true,
          removeViewBox:false,
          removeUnusedNS: true,
          cleanupIDs: true
        }]
      },
      filename: 'svgsprite.svg'
    })
  ],
}

if      (process.env.NODE_ENV === 'development')  module.exports = merge(development, common)
else if (process.env.NODE_ENV === 'production')   module.exports = merge(production, common)

