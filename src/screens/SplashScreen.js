/* eslint-disable no-useless-return */
import React, { useEffect } from 'react'
import { AsyncStorage } from 'react-native'

import Loading from '../components/Loading'

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // bootstrap()
  }, [])

  const bootstrap = async () => {
    const token = await AsyncStorage.getItem('@token')

    if (!token) {
      navigation.navigate('Auth')
      return
    }
  }

  return <Loading />
}

export default SplashScreen
