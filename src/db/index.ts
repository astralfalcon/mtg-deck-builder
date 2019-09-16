import { createConnection, getRepository } from 'typeorm/browser'
import { Set } from './set'
import { Card } from './card'

export const connect = () => {
  return createConnection({
    type: 'react-native',
    database: 'hecate',
    location: 'default',
    logging: ['error', 'query', 'schema'],
    synchronize: true,
    entities: [Card, Set]
  })
}

export * from './set'
export * from './card'

/*
 *
export const setup = async db => {
  const path = `${fs.MainBundlePath}/schema.sql`
  const schema = await fs.readFile(path)
  const statements = compact(schema.split(';').map(trim))
  for (sql of statements) {
    await db.executeSql(sql)
  }
}
*/
