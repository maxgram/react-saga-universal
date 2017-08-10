const CWD = process.cwd()
const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'eval-cheap-module-source-map',

  entry: {
    main: [
      'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr',
      path.resolve(CWD, './src/client.dev.js')
    ],
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        exclude: path.resolve(CWD, './node_modules/react-flexbox-grid'),
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
      //
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
}
