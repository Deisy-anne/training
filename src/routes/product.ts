import { ExpressHttp } from '../configs/http'
import { ProductService } from '../services/products'

export class ProductRoute {
  constructor () {
    
  }
  static configure (): void {
    const productService = new ProductService()
    ExpressHttp.app.post('/products', async (request, response) => {
      const result = await productService.add(request.body)
      response.status(201).json(result)
    })
    ExpressHttp.app.get('/products', async (request, response) => {
      const result = await productService.find()
      response.status(200).json(result)
    } )

    ExpressHttp.app.delete('/products/:id', async (request, response) => {
      const result = await productService.delete(request.params.id)
      response.status(200).json(result)
    })

    ExpressHttp.app.put('/products', async (request, response) => {
      const result = await productService.update(request.body)
      response.status(200).json(result)
    })
  }
}