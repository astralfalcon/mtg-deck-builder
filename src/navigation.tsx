import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
// Screens
import DecksScreen from './screens/decks'
import BuilderScreen from './screens/builder'
// Community
import CommunityScreen from './screens/community'
import ProfileScreen from './screens/profile'

const DeckBuilderStack = createStackNavigator(
  {
    Decks: {
      screen: DecksScreen
    },
    Builder: BuilderScreen
  },
  {
    initialRouteName: 'Decks'
  }
)

const TabNavigator = createBottomTabNavigator({
  Decks: DeckBuilderStack,
  Community: CommunityScreen,
  Profile: ProfileScreen
})

export default createAppContainer(TabNavigator)
