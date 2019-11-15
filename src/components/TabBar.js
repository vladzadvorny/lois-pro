import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { colors } from '../constants/theme'

const TabBar = () => {
  return (
    <View style={styles.main}>
      <Text>TabBar</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    height: 50,
    backgroundColor: colors.black
  }
})
export default TabBar
