import { createStackNavigator } from 'react-navigation-stack'

export default createStackNavigator(
  {
    Auth: {
      getScreen: () => require('../screens/AuthScreen').default
    }
  },
  {
    headerMode: 'none'
  }
)
