import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import * as RNLocalize from 'react-native-localize'
import { AsyncStorage } from 'react-native'
import moment from 'moment'
import 'moment/min/locales'

import resources from '../translations'
// import { languages } from '../constants/config';
export const languages = Object.keys(resources) // eslint-disable-line

const languageDetector = {
  type: 'languageDetector',
  async: true, // flags below detection to be async
  detect: async callback => {
    let lang = null
    try {
      lang = await AsyncStorage.getItem('@settings:interfaceLanguage')
    } catch (error) {} // eslint-disable-line

    const locales = RNLocalize.getLocales()
    const locale = locales[0].languageCode

    moment.locale(lang || locale)
    callback(lang || locale)
  },
  init: () => {},
  cacheUserLanguage: () => {}
}

i18n
  .use(languageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'en',
    debug: false,
    resources,
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    },
    react: {
      useSuspense: false
    }
  })

export default i18n
