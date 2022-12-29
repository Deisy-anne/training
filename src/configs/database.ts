import pgp, {IDatabase} from 'pg-promise'

export class PgDatabase {
 static connection: IDatabase<{}> | undefined
  
  static async connect (url: string): Promise <void> {
    PgDatabase.connection = pgp()(url)
  }

  static async execute (sql: string, params: any[]): Promise <any> {
    if(PgDatabase.connection === undefined) throw new Error("Connection not found")
    return await PgDatabase.connection.query(sql, params)
  } 

  static async disconnect (): Promise <void> {
    await PgDatabase.connection?.$pool.end()
  }
}