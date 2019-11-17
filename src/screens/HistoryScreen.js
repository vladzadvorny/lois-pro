import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ActionButton from 'react-native-action-button'

import { colors } from '../constants/theme'

import Header from '../components/Header'

const HistoryScreen = ({ navigation }) => {
  return (
    <>
      <Header title="hello" navigation={navigation} />

      <View style={styles.main}>
        <Text>HistoryScreen</Text>
      </View>

      <ActionButton
        buttonColor={colors.secondary}
        shadowStyle={{
          shadowColor: '#000000',
          shadowOpacity: 0.8,
          shadowRadius: 2,
          shadowOffset: {
            height: 1,
            width: 0
          }
        }}
        offsetY={67}
        fixNativeFeedbackRadius
        onPress={() => {
          navigation.navigate('CreateTask')
        }}
      />
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

export default HistoryScreen
