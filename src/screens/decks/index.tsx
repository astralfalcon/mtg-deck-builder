import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { TouchableOpacity, Button, View, Text } from 'react-native'
import { NavigationScreenProp } from 'react-navigation'

export interface DecksScreenProps {
  navigation: NavigationScreenProp<any>
}

export default class DecksScreen extends React.Component<DecksScreenProps> {
  static navigatirnOptions = ({
    navigation
  }: {
    navigation: NavigationScreenProp<any>
  }) => ({
    title: 'Decks',
    headerRight: (
      <TouchableOpacity
        onPress={() => navigation.navigate('Builder')}
        style={{ padding: 20 }}
      >
        <FontAwesomeIcon icon="plus" style={{ color: '#007AFF' }} />
      </TouchableOpacity>
    )
  })

  componentDidMount() {
    this.props.navigation.navigate('Builder')
  }

  render() {
    return (
      <View>
        <Text>Decks Page</Text>
      </View>
    )
  }
}
