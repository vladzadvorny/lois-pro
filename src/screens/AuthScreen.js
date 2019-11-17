import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { useTranslation } from 'react-i18next'

import { colors, freeSpace, borderRadius, fontSize } from '../constants/theme'
import { images } from '../constants/images'

import Signup from '../components/Signup'

const AuthScreen = ({ navigation }) => {
  const { t } = useTranslation(['auth', 'common'])
  const [showSignup, setShowSignup] = useState(false)

  if (showSignup) {
    return (
      <Signup
        onCancel={() => setShowSignup(false)}
        navigation={navigation}
        t={t}
      />
    )
  }

  return (
    <>
      <View style={styles.main}>
        <Image
          style={{
            height: 180,
            marginBottom: freeSpace * 5
          }}
          resizeMode="contain"
          source={images.textLogo}
        />
        <View style={{ height: 50, marginBottom: freeSpace * 3 }}>
          <TouchableOpacity
            style={{
              backgroundColor: colors.primary,
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius,
              paddingRight: freeSpace * 2,
              paddingLeft: freeSpace * 2
            }}
            onPress={() => setShowSignup(true)}
          >
            <Text style={{ color: colors.white, fontSize: fontSize.lg }}>
              {t('signIn')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white
  }
})

export default AuthScreen
