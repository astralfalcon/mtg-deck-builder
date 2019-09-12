import React from 'react'
import { View, Text } from 'react-native'
import { CardGrid } from '../../components'

export default function BuilderScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Text>Builder Screen</Text>
      <CardGrid />
    </View>
  )
}
