/* eslint-disable react/jsx-curly-newline */
import React from 'react'
import { View, Text, StyleSheet, Linking, ScrollView } from 'react-native'
import { MarkdownView } from 'react-native-markdown-view'
import { useTranslation } from 'react-i18next'

import { freeSpace, colors, fontSize } from '../constants/theme'
import { version } from '../../package.json'
import privacyPath from '../../PrivacyPolicy'

import Header from '../components/Header'

const AboutScreen = ({ navigation }) => {
  const { t } = useTranslation(['about', 'common'])

  return (
    <>
      <Header
        title={t('about')}
        navigation={navigation}
        leftElement="arrow-back"
      />

      <View
        style={[
          styles.main,
          { justifyContent: 'center', alignItems: 'center' }
        ]}
      >
        <Text style={{ fontSize: fontSize.md }}>© Lois, 2018.</Text>
        <Text
          style={{ fontSize: fontSize.md, color: colors.primary }}
          onPress={() =>
            Linking.openURL('mailto:support@lois.pro?subject=Hello&body=')
          }
        >
          support@lois.pro
        </Text>

        <Text style={{ fontStyle: 'italic', marginBottom: freeSpace }}>
          version: {version}
        </Text>
        <ScrollView>
          <MarkdownView>{privacyPath}</MarkdownView>
        </ScrollView>
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

export default AboutScreen
