import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { TouchableOpacity, Button, View, Text } from 'react-native'

//
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export default class DecksScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
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
