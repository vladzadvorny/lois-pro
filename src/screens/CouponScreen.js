import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Header from '../components/Header'

const CouponScreen = ({ navigation }) => {
  return (
    <>
      <Header title="hello" navigation={navigation} />

      <View style={styles.main}>
        <Text>CouponScreen</Text>
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

export default CouponScreen
