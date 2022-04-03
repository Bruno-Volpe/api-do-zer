import express from 'express'
import dotenv from 'dotenv'
import './src/database'

import homeRouter from './src/routes/home'
import passouRouter from './src/routes/passou'

dotenv.config()

class App{
  constructor() {
    this.app = express()
    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.app.use(express.json())
    this.app.use(express.urlencoded({extended: true}))
  }

  routes() {
    this.app.use('/', homeRouter)
    this.app.use('/Aluno/passou', passouRouter)
  }
}

export default new App().app
