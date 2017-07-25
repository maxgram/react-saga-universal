const CWD = process.cwd()
const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin')

module.exports = {
  devtool: false,
  entry: path.resolve(CWD, './src/index'),
  module: {
    loaders: [
      {
        test: /\.css$/,
        exclude: /react-flexbox-grid/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              query: {
                modules: true,
                minimize: true,
                localIdentName: '[hash:base64:5]'
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
        })
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: [{
          loader: 'url?limit=10000&mimetype=image/svg+xml',
        }],
      },
      //
    ]
  },

  plugins: [
    new ExtractTextPlugin("bundle.css"),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
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
      filename: '/static/svgsprite.svg'
    })
    //
  ]
}
