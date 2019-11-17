import React from 'react'
import { View, StyleSheet, ActivityIndicator } from 'react-native'

import { colors } from '../constants/theme'

const Loading = ({ over }) => (
  <View style={over ? styles.over : styles.default}>
    <ActivityIndicator size="large" color={colors.primary} />
  </View>
)

const styles = StyleSheet.create({
  default: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  over: {
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    position: 'absolute',
    zIndex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Loading
