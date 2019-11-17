import { Alert, Linking } from 'react-native'

import store from '../store'

// eslint-disable-next-line
const nativeApp = async (domain, code) => {
  // console.log('llddl', store.getState().app.useWebLinks)

  let url
  if (!code) {
    url = `tg://resolve?domain=${domain}`
  } else {
    url = `tg://resolve?domain=${domain}&start=${code}`
  }

  try {
    const supported = await Linking.canOpenURL(url)

    if (!supported) {
      return Alert.alert('Error!', 'Telegram app is not installed')
    }

    return Linking.openURL(url)
  } catch (error) {
    Alert.alert('Error!', 'An error occurred')
  }
}

// eslint-disable-next-line
const webLink = async (domain, code) => {
  // console.log('lll', store.getState().app.useWebLinks)

  let url
  if (!code) {
    url = `https://tele.click/${domain}`
  } else {
    url = `https://tele.click/${domain}?start=${code}`
  }

  try {
    const supported = await Linking.canOpenURL(url)

    if (!supported) {
      return Alert.alert('Error!', 'Telegram app is not installed')
    }

    return Linking.openURL(url)
  } catch (error) {
    Alert.alert('Error!', 'An error occurred')
  }
}

export const goToChat = (domain, code = '') => {
  if (store.getState().app.useWebLinks) {
    webLink(domain, code)
  } else {
    nativeApp(domain, code)
  }
}

// export const goToChannel = store.getState().app.useWebLinks
//   ? webLink
//   : nativeApp
