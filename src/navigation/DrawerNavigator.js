import { createDrawerNavigator } from 'react-navigation-drawer'

import Drawer from '../components/Drawer'
import TabNavigator from './TabNavigator'

export default createDrawerNavigator(
  {
    Home: TabNavigator,
    Settings: {
      getScreen: () => require('../screens/SettingsScreen').default
    },
    About: {
      getScreen: () => require('../screens/AboutScreen').default
    },
    Coupon: {
      getScreen: () => require('../screens/CouponScreen').default
    },
    Purchase: {
      getScreen: () => require('../screens/PurchaseScreen').default
    },
    Check: {
      getScreen: () => require('../screens/CheckScreen').default
    }
  },
  {
    contentComponent: Drawer,
    initialRouteName: 'Home',
    drawerWidth: 300
  }
)
