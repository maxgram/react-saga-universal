import express from 'express'
import path from 'path'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import { renderDom } from '../../src/html'

// const DEV_HOST = process.env.HOST
// const DEV_PORT = process.env.PORT
const PORT = process.env.PORT
const CWD = process.cwd()

const config = require('../webpack/config.dev')
const compiler = webpack(config)
const app = express()

app.use(webpackDevMiddleware(compiler, {
  stats: 'minimal',
  publicPath: config.output.publicPath,
}))

app.use(webpackHotMiddleware(compiler, {
  log: console.log,
  path: "/__webpack_hmr",
  heartbeat: 10000
}))

app.use('/static', express.static(path.resolve(CWD, './static/')))
app.use('/dist', express.static(path.resolve(CWD, './dist/')))

app.get('/favicon.ico', (req, res) => {res.send(204)})
app.get(/.*/, (req, res) => {res.end(renderDom(''))})

// server.listen(DEV_PORT, DEV_HOST, () => {
//   console.log('Node Express Server is running on http://%s:%s', DEV_HOST, DEV_PORT)
// })

app.listen(PORT, (error) => {
  if (error)  console.error(error)
  else        console.info(`App is UP on port ${PORT}!\n`)
})
