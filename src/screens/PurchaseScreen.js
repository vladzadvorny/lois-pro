import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const PurchaseScreen = () => {
  return (
    <View style={styles.main}>
      <Text>PurchaseScreen</Text>
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

export default PurchaseScreen
