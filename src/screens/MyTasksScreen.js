import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const MyTasksScreen = () => {
  return (
    <View style={styles.main}>
      <Text>MyTasksScreen</Text>
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

export default MyTasksScreen
