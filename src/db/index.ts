import SQLite from 'react-native-sqlite-storage'
import fs from 'react-native-fs'
SQLite.DEBUG(true)
SQLite.enablePromise(true)

export const Setup = async () => {
  try {
    const db = await SQLite.openDatabase('hecate.db', '1.0', 'hecate', 10000000)
    const result = await db.executeSql('SELECT 1+1 AS result;')
    console.log(
      'Database is ready... executing query...',
      result[0].rows.item(0)
    )
    const path = `${fs.MainBundlePath}/schema.sql`
    const schema = await fs.readFile(path)
    console.log(schema)
  } catch (err) {
    console.log('WOH', err)
  }
}
