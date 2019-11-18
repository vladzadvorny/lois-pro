import { AsyncStorage } from 'react-native'

const get = async () => {
  const info = await AsyncStorage.getItem('@info')

  if (!info) {
    return {}
  }

  return JSON.parse(info)
}

const set = async obj => {
  const info = JSON.parse(await AsyncStorage.getItem('@info')) || {}

  // eslint-disable-next-line prefer-object-spread
  const assign = Object.assign({}, info, obj)

  await AsyncStorage.setItem('@info', JSON.stringify(assign))
}

export const InfoStorage = {
  get,
  set
}
