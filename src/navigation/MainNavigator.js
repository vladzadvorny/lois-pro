import { createSwitchNavigator } from 'react-navigation'

import AuthNavigator from './AuthNavigator'
import DrawerNavigator from './DrawerNavigator'

export default createSwitchNavigator(
  {
    Splash: {
      getScreen: () => require('../screens/SplashScreen').default
    },
    Error: {
      getScreen: () => require('../screens/ErrorScreen').default
    },
    Auth: AuthNavigator,
    Main: DrawerNavigator
  },
  {
    initialRouteName: 'Splash'
  }
)
