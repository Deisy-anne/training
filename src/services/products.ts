import { Product } from '../models/product'
import {randomUUID} from 'node:crypto'
import { PgDatabase } from '../configs/database'

export class ProductService {
  async add ({description, price}: Omit <Product, 'id'>): Promise<Product> {
    const id = randomUUID()
    const sql = 'insert into products (id, description, price) values ($1, $2, $3)'
    await PgDatabase.execute(sql, [id, description, price])
    return { id, description, price }
  }

  async find (): Promise <Product[]> {
    const sql = 'select * from products'
    return await PgDatabase.execute(sql, [])
    
  }

  async delete (id: string): Promise<void> {
    const sql = 'delete from products where id = $1'
    await PgDatabase.execute(sql, [id])
    
  }

  async update ({id, description, price}: Product): Promise<void> {
    const selectSql = 'select * from products where id = $1'
    const result = await PgDatabase.execute(selectSql, [id])
    const product = result[0]
    if (product === undefined) throw new Error("Product not found")
    const updateSql = 'update products set description=$1, price=$2 where id=$3'
     await PgDatabase.execute(updateSql, [description ?? product.description, price ?? product.price, id])

  }
}