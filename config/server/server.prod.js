import "babel-polyfill";
import express from 'express'
import path from 'path'
import serverRenderer from '../../src/node'

const PORT = process.env.PORT
const CWD = process.cwd()
const app = new express()

app.get('/favicon.ico', (req, res) => { res.send(204) })

app.use('/static', express.static(path.resolve(CWD, './static/')))
app.use('/dist', express.static(path.resolve(CWD, './dist/')))
app.use(serverRenderer)

app.listen(PORT, (error) => {
  if (error)  console.error(error)
  else        console.info(`App is UP on port ${PORT}!\n`)
})
