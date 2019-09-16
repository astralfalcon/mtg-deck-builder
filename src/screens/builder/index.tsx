import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { CardGrid } from '../../components'
import { Card } from '../../db'

export default function BuilderScreen() {
  const [cards, setCards] = useState([])
  useEffect(() => {
    async function load() {
      const loaded = await Card.find()
      setCards(loaded)
    }
    load()
  }, [])
  return (
    <View style={{ flex: 1 }}>
      <Text>Builder Screen</Text>
      <CardGrid cards={cards} />
    </View>
  )
}
