const ENV = process.env.NODE_ENV
const CWD = process.cwd()
const fs = require('fs')
const path = require('path')
const DOTENV = require('dotenv').config({path: path.resolve(CWD, './.env')})
const config = JSON.parse(fs.readFileSync(path.resolve(CWD, './config/.babelrc')))

const aliases = require('../aliases')
const KEY = '@CSS'
const PATH = aliases.resolve.alias[KEY]


if(ENV === 'development') {
  require('babel-core/register')(config)
  require('./server.dev')
} else if(ENV === 'production') {
  require('css-modules-require-hook')({
    generateScopedName: '[hash:base64:5]',
    // generateScopedName: '[path]__[name]__[local]',
    preprocessCss: function (css, filename) {
      // prod fix
      const re = new RegExp(KEY, 'g')
      const out = css.replace(re, PATH)
      return out
    },
  })
  require('babel-core/register')(config)
  require('./server.prod')
}

console.log(':::[ '+ENV.toUpperCase()+' SERVER STARTED ]:::')
