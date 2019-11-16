import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Header from '../components/Header'

const MyTasksScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.toggleDrawer()
    }, 1000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Header title="hello" navigation={navigation} />
      <View style={styles.main}>
        <Text>MyTasksScreen</Text>
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

export default MyTasksScreen
