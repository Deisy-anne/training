import express, { Express, json } from 'express'

export class ExpressHttp {
  static app: Express

  constructor(){
    ExpressHttp.app = express()
    ExpressHttp.app.use(json())
  }
  
  listen (port: number): void {
    ExpressHttp.app.listen(port)
  }

 
}