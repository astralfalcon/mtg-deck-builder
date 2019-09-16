import React, { useState, useEffect } from 'react'
import {
  Dimensions,
  Image,
  FlatList,
  StyleSheet,
  Text,
  View
} from 'react-native'
import { Card } from '../db'

export interface CardGridProps {
  cards: Card[]
}

interface ItemProps {
  card: Card
}

class Item extends React.PureComponent<ItemProps> {
  render() {
    const { card } = this.props
    return (
      <View
        style={{
          flex: 0.5,
          marginHorizontal: 4
        }}
      >
        <Image
          source={{ uri: card.imageUris ? card.imageUris.normal : '' }}
          style={{
            height: 280,
            width: '100%',
            borderRadius: 11,
            resizeMode: 'contain'
          }}
        />
      </View>
    )
  }
}

export const CardGrid = ({ cards }: CardGridProps) => {
  return (
    <FlatList
      data={cards}
      columnWrapperStyle={{
        marginBottom: 10,
        justifyContent: 'space-around'
      }}
      numColumns={2}
      renderItem={({ item }) => <Item card={item} />}
      keyExtractor={item => item.id}
    />
  )
}
