import { Registration } from '../models/registration'
import { PgDatabase } from '../configs/database'

import {randomUUID} from 'node:crypto'



export class RegistrationService {
  async add (input: Omit<Registration, 'id'>): Promise <any> {
  const id = randomUUID()
  const registrationOrErrors = Registration.create({...input, id, birthDate: new Date(input.birthDate)})
  if (registrationOrErrors.isLeft()) return registrationOrErrors.value
  const sql = 'insert into registration(id, name, last_name, date_birth, email, password) values ($1, $2, $3, $4, $5, $6)'
  const {name, lastName, birthDate, email, password} = registrationOrErrors.value
  await PgDatabase.execute(sql, [id, name, lastName, birthDate, email, password])
  return {id, name, lastName, birthDate, email, password}
  }

  async find (): Promise <Registration[]>{
    const sql = 'select * from registration'
    return PgDatabase.execute(sql, [])
  }

  async delete (id: string): Promise <void>{
    const sql = 'delete from registration where id = $1'
    await PgDatabase.execute(sql, [id])
  }

  async update ({id, name, lastName, birthDate, email, password}: Registration): Promise <void> {
    const selectSql = 'select * from registration where id = $1'
    const result = await PgDatabase.execute(selectSql,[id])
    const registration = result[0]
    if (registration === undefined) throw new Error("Registration not found")
    const sql = 'update registration set name=$1, last_name=$2,birth_date=$3, email=$4, password=$5 where id=$6'
    await PgDatabase.execute(sql, [name ?? registration.name, lastName ?? registration.lastName, birthDate ?? registration.birthDate, email ?? registration.email, password ?? registration.password, id])
  }
  
}