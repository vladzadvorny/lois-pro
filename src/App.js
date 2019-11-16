import React, { useState, useEffect } from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'

import AppNavigator from './navigation/AppNavigator'
import Loading from './components/Loading'

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    bootstrap()
  }, [])

  const bootstrap = async () => {
    await Font.loadAsync({
      Roboto: require('../assets/fonts/Roboto-Regular.ttf'),
      Roboto_medium: require('../assets/fonts/Roboto-Medium.ttf'),
      ...Ionicons.font
    })
    setLoading(false)
  }

  if (loading) {
    return <Loading />
  }

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
