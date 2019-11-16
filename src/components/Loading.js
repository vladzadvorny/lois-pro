import React from 'react'
import { View, StyleSheet, ActivityIndicator } from 'react-native'

import { colors } from '../constants/theme'

const Loading = () => {
  return (
    <View style={styles.main}>
      <ActivityIndicator size="large" color={colors.primary} />
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

export default Loading
