const ENV = process.env.NODE_ENV
const CWD = process.cwd()
const fs = require('fs')
const path = require('path')
const DOTENV = require('dotenv').config({path: path.resolve(CWD, './config/.env')})
const config = JSON.parse(fs.readFileSync(path.resolve(CWD, './config/.babelrc')))

if(ENV === 'development') {
  require('babel-core/register')(config)
  require('./server.dev')
} else if(ENV === 'production') {
  require('css-modules-require-hook')({
    generateScopedName: '[hash:base64:5]'
  })
  require('babel-core/register')(config)
  require('./server.prod')
}

console.log('[::: '+ENV.toUpperCase()+' SERVER STARTED :::]')
