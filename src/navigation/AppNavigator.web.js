import { createBrowserApp } from '@react-navigation/web'

import MainNavigator from './MainNavigator'

export default createBrowserApp(MainNavigator, { history: 'hash' })
