import React, { useState, useEffect } from 'react'
import { SafeAreaView, StatusBar } from 'react-native'

import './utils/i18n'

import AppNavigator from './navigation/AppNavigator'
import Loading from './components/Loading'

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    bootstrap()
  }, [])

  const bootstrap = async () => {
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
