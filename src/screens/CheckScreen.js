import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const CheckScreen = () => {
  return (
    <View style={styles.main}>
      <Text>CheckScreen</Text>
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

export default CheckScreen
