import cors from 'cors'
import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
dotenv.config()

class App {
  constructor() {}

  start() {
    const { app, router } = this.makeExpressApp()
    const services = { router }

    app.listen(8080, () => {
      console.log('Example deploy listening on port 8080.')
    })
  }


  makeExpressApp = () => {
    // eslint-disable-next-line new-cap
    const router = express.Router()
    router.use(cors({ origin: true }))

    const app = express()
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())

    // This is the middleware function which will be called before any routes get
    // hit which are defined after this point, i.e. in your app.js
    app.use((req, res, next) => {
      print(req.method + ' ' + req.url)
      console.log(req.headers)
      if (req.body !== undefined) {
        print(req.body)
      }

      // Carry on with the request chain
      next()

      return true
    })

    app.use(router)

    return { app, router }
  }
}

exports.App = App
