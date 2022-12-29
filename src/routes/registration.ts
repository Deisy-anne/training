import { ExpressHttp } from '../configs/http'
import {  RegistrationService } from '../services/registration'


export class RegistrationRoute {
  constructor () {

  }

  static configure (): void {
    const registrationService = new RegistrationService()
    ExpressHttp.app.post('/registration', async (request, response) => {
      const result = await registrationService.add(request.body)
      response.status(201).json(result)
    })
    ExpressHttp.app.get('/registration', async (request, response) => {
      const result = await registrationService.find()
      response.status(200).json(result)
    })
    ExpressHttp.app.delete('/registration/:id', async (request, response) => {
      const result = await registrationService.delete(request.params.id)
      response.status(200).json(result)
    })

    ExpressHttp.app.put('/registration', async (request, response) => {
      const result = await registrationService.update(request.body)
      response.status(200).json(result)
    })


  
  }
}