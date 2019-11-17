import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Header from '../components/Header'

const SettingsScreen = ({ navigation }) => {
  return (
    <>
      <Header title="hello" navigation={navigation} leftElement="arrow-back" />

      <View style={styles.main}>
        <Text>SettingsScreen</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default SettingsScreen
