import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'

import AppNavigator from './navigation/AppNavigator'

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <AppNavigator />
      </SafeAreaView>
    </>
  )
}

export default App
