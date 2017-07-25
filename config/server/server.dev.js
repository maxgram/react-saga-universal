import Express from 'express'
import http from 'http'
import path from 'path'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

import { renderDom } from '../../src/root/html'

const DEV_HOST = process.env.DEV_HOST
const DEV_PORT = process.env.DEV_PORT
const CWD = process.cwd()


const webpackConfig = require('../webpack/config.com')
const compiler = webpack(webpackConfig)
const app = new Express()
const server = new http.Server(app)
const publicPath = 'http://'+DEV_HOST+':'+DEV_PORT+webpackConfig.output.publicPath


app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: publicPath,
}))

app.use(webpackHotMiddleware(compiler, {
  log: console.log, //false
  path: "/__webpack_hmr",
  heartbeat: 10 * 1000
}))

app.use('/static', Express.static(path.resolve(CWD, './static/')))
app.use('/dist', Express.static(path.resolve(CWD, './dist/')))

app.get(/.*/, (req, res) => {
  const domain = req.get('host').replace(/\:.*/, '')
  res.end( renderDom('', DEV_PORT, domain) )
})

server.listen(DEV_PORT, DEV_HOST, () => {
  console.log('Node Express Server is running on http://%s:%s', DEV_HOST, DEV_PORT)
})
