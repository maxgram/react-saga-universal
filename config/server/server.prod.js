import Express from 'express'
import path from 'path'
import serverRenderer from '../../src/root/serverRenderer'

const PROD_PORT = process.env.PROD_PORT
const CWD = process.cwd()
const app = new Express()


app.get('/favicon.ico', (req, res) => {
  res.send(204);
})

app.use('/static', Express.static(path.resolve(CWD, './static/')))
app.use('/dist', Express.static(path.resolve(CWD, './dist/')))

app.use(serverRenderer)

app.listen(PROD_PORT, (error) => {
  if (error) console.error(error)
  else console.info(`App: listening on port ${PROD_PORT}. Open up http://localhost:${PROD_PORT}/ in your browser.`)
})
