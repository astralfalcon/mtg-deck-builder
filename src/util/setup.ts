import fs, { readFile } from 'react-native-fs'
import { Card, Set } from '../db'

export const setup = async () => {
  const path = `${fs.MainBundlePath}/dom.json`
  const data = await readFile(path, 'utf8')
  const cards = JSON.parse(data)

  const s = new Set()
  s.name = 'Core Set 2020'
  s.code = 'm20'
  s.arenaCode = 'm20'
  s.keyrune = 'm20'
  await s.save()

  for (let c of cards) {
    const card = new Card()
    card.id = c.id
    card.name = c.name
    card.imageUris = c.image_uris
    await card.save()
  }
}
