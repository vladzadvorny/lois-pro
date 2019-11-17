import React, { useState, useEffect } from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { Provider } from 'react-redux'

import './utils/i18n'
import store from './store'
import { colors } from './constants/theme'

import AppNavigator from './navigation/AppNavigator'
import Loading from './components/Loading'

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    bootstrap()
  }, [])

  const bootstrap = async () => {
    // TODO: ...
    setLoading(false)
  }

  if (loading) {
    return <Loading />
  }

  return (
    <Provider store={store}>
      <StatusBar translucent backgroundColor={`${colors.black}77`} />
      <SafeAreaView style={{ flex: 1 }}>
        <AppNavigator />
      </SafeAreaView>
    </Provider>
  )
}

export default App
