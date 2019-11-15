import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const SettingsScreen = () => {
  return (
    <View style={styles.main}>
      <Text>SettingsScreen</Text>
    </View>
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
