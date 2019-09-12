import React from 'react'
import {
  Dimensions,
  Image,
  FlatList,
  StyleSheet,
  Text,
  View
} from 'react-native'

const DATA = [
  {
    id: '64d9c182-cbb3-4791-90dd-0e533ddeebda',
    image:
      'https://img.scryfall.com/cards/normal/front/6/4/64d9c182-cbb3-4791-90dd-0e533ddeebda.jpg?1563898171'
  },
  {
    id: '79883468-a37c-4894-8d05-6a4d150b7d59',
    image:
      'https://img.scryfall.com/cards/normal/front/7/9/79883468-a37c-4894-8d05-6a4d150b7d59.jpg?1563898178'
  },
  {
    id: '2ba18114-af6c-48cd-82c9-eb6541d566bf',
    image:
      'https://img.scryfall.com/cards/normal/front/2/b/2ba18114-af6c-48cd-82c9-eb6541d566bf.jpg?1563898185'
  },
  {
    id: 'e2f39777-b80a-4618-9310-a9e5b91bb2a2',
    image:
      'https://img.scryfall.com/cards/normal/front/e/2/e2f39777-b80a-4618-9310-a9e5b91bb2a2.jpg?1563898192'
  },
  {
    id: '35100197-7914-450e-9205-57cb4fc345d6',
    image:
      'https://img.scryfall.com/cards/normal/front/3/5/35100197-7914-450e-9205-57cb4fc345d6.jpg?1563898198'
  },
  {
    id: '62f69602-b5fd-46d6-8dae-d77df35e378c',
    image:
      'https://img.scryfall.com/cards/normal/front/6/2/62f69602-b5fd-46d6-8dae-d77df35e378c.jpg?1563898206'
  }
]

const Item = ({ image }) => (
  <View
    style={{
      flex: 0.5,
      marginHorizontal: 4
    }}
  >
    <Image
      source={{ uri: image }}
      style={{
        height: 280,
        width: '100%',
        borderRadius: 11,
        resizeMode: 'contain'
      }}
    />
  </View>
)

export const CardGrid = () => (
  <FlatList
    data={DATA}
    columnWrapperStyle={{
      marginBottom: 10,
      justifyContent: 'space-around'
    }}
    numColumns={2}
    renderItem={({ item }) => <Item image={item.image} />}
    keyExtractor={item => item.id}
  />
)
