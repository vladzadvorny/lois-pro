/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-useless-return */
import React, { useEffect } from 'react'
import { AsyncStorage } from 'react-native'
import { useDispatch } from 'react-redux'
import wretch from 'wretch'

import { SET_ME } from '../store/types'
import { uri } from '../constants/config'

import Loading from '../components/Loading'

const SplashScreen = ({ navigation }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    bootstrap()
  }, [])

  const bootstrap = async () => {
    try {
      const token = await AsyncStorage.getItem('@token')

      if (!token) {
        navigation.navigate('Auth')
        return
      }

      const data = await wretch(uri)
        .url('/me')
        .auth(`Bearer ${token}`)
        .get()
        .json()

      dispatch({ type: SET_ME, payload: data.me })
      navigation.navigate('Main')
    } catch (error) {
      console.log(error)
    }
  }

  return <Loading />
}

export default SplashScreen
