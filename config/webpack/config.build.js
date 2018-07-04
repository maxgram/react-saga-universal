const version = require('../../package.json').version
const CWD = process.cwd()
const path = require('path')
const merge = require('webpack-merge')
const common = require('./config.js')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const build = {
  mode: 'production',
  devtool: false,

  entry: [
    'babel-polyfill',
    path.resolve(CWD, './src/client.prod.js'),
  ],

  output: {
    path: path.resolve(CWD, 'dist'),
    publicPath: '/',
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'bundle-'+version+'.css',
      chunkFilename: 'vendor-'+version+'.css',
    }),
    // new BundleAnalyzerPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            query: {
              modules: true,
              minimize: true,
              sourceMap: false,
              localIdentName: '[hash:base64:5]'
              // localIdentName: '[path]__[name]__[local]', // '[hash:base64:5]'
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
        ],
      },
    ]
  },

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: false
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },

  stats: {
    warnings: false,
    children: false,
  },
};


module.exports = merge(build, common)
