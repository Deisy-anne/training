import { PgDatabase } from './configs/database'
import { ExpressHttp } from './configs/http'
import { RegistrationRoute } from './routes/registration'
import { ProductRoute } from './routes/product'

async function bootstrap () {
  await PgDatabase.connect('postgres://postgres:011018@localhost:5432/teste')
  const app = new ExpressHttp()
  ProductRoute.configure()
  app.listen(3005)
  RegistrationRoute.configure()
}

bootstrap()