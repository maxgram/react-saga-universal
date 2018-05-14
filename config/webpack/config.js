const CleanWebpackPlugin = require('clean-webpack-plugin')
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin')
const path = require('path')
const version = require('../../package.json').version
const aliases = require('../aliases').resolve.alias
const CWD = process.cwd()

module.exports = {
  resolve: {
    extensions: ['.js', '.json', '.css'],
    alias: aliases
  },

  output: {
    filename: 'index-' + version + '.js',
    chunkFilename: '[name]-' + version + '.js',
  },

  optimization: {
    splitChunks: {
      name: true,
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },

  plugins: [
    new CleanWebpackPlugin(['dist'], {root: CWD}),
    new SVGSpritemapPlugin({
      src: path.resolve(CWD, './static/svg/**/*.svg'),
      prefix: 'sprite-',
      svgo: {
        plugins: [{
          removeTitle:true,
          removeUnusedNS: true,
          removeViewBox:false,
        }]
      },
      filename: 'svgsprite.svg'
    })
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        include: /src/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react', 'stage-2'],
          }
        }],
      },
    ]
  },
}
