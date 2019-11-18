import React, { useState, useEffect } from 'react'
import { SafeAreaView, StatusBar, AsyncStorage } from 'react-native'
import { Provider } from 'react-redux'

import './utils/i18n'
import store from './store'
import { colors } from './constants/theme'
import { SET_USE_WEB_LINKS } from './store/types'

import AppNavigator from './navigation/AppNavigator'
import Loading from './components/Loading'

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    bootstrap()
  }, [])

  const bootstrap = async () => {
    try {
      const useWebLinks = await AsyncStorage.getItem('@Settings:useWebLinks')
      store.dispatch({ type: SET_USE_WEB_LINKS, payload: useWebLinks === '1' })
    } catch (error) {
      console.log(error)
    }

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
