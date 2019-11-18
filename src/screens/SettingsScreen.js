import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage,
  Picker,
  Switch
} from 'react-native'
import { useTranslation } from 'react-i18next'
import { useSelector, useDispatch } from 'react-redux'

import { freeSpace, fontSize, colors } from '../constants/theme'
import languages from '../constants/languages'
import { languages as interfaceLanguages } from '../utils/i18n'
import { SET_USE_WEB_LINKS } from '../store/types'

import Header from '../components/Header'

const SettingsScreen = ({ navigation }) => {
  const { t, i18n } = useTranslation(['settings', 'common'])
  const useWebLinks = useSelector(state => state.app.useWebLinks)
  const dispatch = useDispatch()
  const setUseWebLinks = payload =>
    dispatch({ type: SET_USE_WEB_LINKS, payload })

  return (
    <>
      <Header
        title={t('settings')}
        navigation={navigation}
        leftElement="arrow-back"
      />

      <View style={styles.main}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: freeSpace * 2
          }}
        >
          <Text style={{ fontSize: fontSize.md, color: colors.black }}>
            {t('useWebLinks')}:
          </Text>
          <Switch
            thumbColor={colors.primary}
            // trackColor={`${colors.black}77`}
            onValueChange={async value => {
              setUseWebLinks(value)
              try {
                await AsyncStorage.setItem(
                  '@Settings:useWebLinks',
                  value ? '1' : '0'
                )
              } catch (error) {
                console.log(error)
              } // eslint-disable-line
            }}
            value={useWebLinks}
          />
        </View>
        <View style={styles.item}>
          <Text
            style={{
              fontSize: fontSize.md,
              color: colors.black,
              marginBottom: 2
            }}
          >
            {t('interfaceLanguage')}:
          </Text>
          <Picker
            selectedValue={i18n.language}
            style={styles.picker}
            onValueChange={async lang => {
              i18n.changeLanguage(lang)
              try {
                await AsyncStorage.setItem('@settings:interfaceLanguage', lang)
              } catch (error) {} // eslint-disable-line
            }}
          >
            {interfaceLanguages.map(item => (
              <Picker.Item
                key={item}
                label={`${languages[item][1]}`}
                value={item}
              />
            ))}
          </Picker>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: freeSpace,
    backgroundColor: colors.white,
    paddingTop: freeSpace * 2
  }
})

export default SettingsScreen
