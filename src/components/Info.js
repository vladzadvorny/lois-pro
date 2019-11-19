import React from 'react'
import { View, Text, TouchableOpacity, Linking, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { borderRadius, colors, freeSpace, fontSize } from '../constants/theme'

// eslint-disable-next-line consistent-return
const webLink = async url => {
  // console.log('lll', store.getState().app.useWebLinks)

  try {
    const supported = await Linking.canOpenURL(url)

    if (!supported) {
      return Alert.alert('Error!', 'Telegram app is not installed')
    }

    return Linking.openURL(url)
  } catch (error) {
    Alert.alert('Error!', 'An error occurred')
  }
}

export const Info = ({ children }) => (
  <View
    style={{
      borderRadius,
      borderWidth: 1,
      borderColor: colors.secondary,
      padding: freeSpace / 2,
      width: '80%',
      backgroundColor: `${colors.secondary}08`
    }}
  >
    <Text
      style={{
        fontSize: fontSize.sm,
        color: colors.secondary,
        textAlign: 'center'
      }}
    >
      {children}
    </Text>
  </View>
)

export const Instruction = ({ t }) => (
  <View
    style={{
      borderRadius,
      borderWidth: 1,
      borderColor: colors.secondary,
      padding: freeSpace,
      backgroundColor: colors.white
    }}
  >
    <Text
      style={{
        fontSize: fontSize.lg,
        color: colors.primary,
        marginBottom: freeSpace / 2
      }}
    >
      {t('common:instruction')}:
    </Text>

    {t('common:instructionsPro', {
      returnObjects: true,
      exchange: t('exchange:exchange'),
      myTasks: t('myTasks'),
      purchases: t('purchases:purchases')
    }).map((item, i) => (
      <Text
        // eslint-disable-next-line
        key={i}
        style={{
          fontSize: fontSize.base,
          color: colors.secondary,
          marginBottom: 2
        }}
      >
        <Text
          style={{
            fontSize: fontSize.base,
            color: colors.secondary
          }}
        >
          {`${i + 1}) `}
        </Text>
        {item}
      </Text>
    ))}
  </View>
)

export const GoToSite = ({ t }) => (
  <TouchableOpacity
    style={{
      borderRadius,
      borderWidth: 1,
      borderColor: colors.primary,
      padding: freeSpace,
      backgroundColor: colors.white,
      marginTop: freeSpace
    }}
    onPress={() => webLink('https://lois.pro')}
  >
    <Text
      style={{
        fontSize: fontSize.base,
        color: colors.primary,
        marginBottom: freeSpace / 2
      }}
    >
      {t('common:instructionsProFree')}
    </Text>
  </TouchableOpacity>
)

export const InfoClose = ({ children, onPress, style }) => (
  <View
    style={{
      borderRadius,
      borderWidth: 1,
      borderColor: colors.primary,
      padding: freeSpace,
      paddingRight: freeSpace / 2 + 1,
      backgroundColor: colors.white,
      marginBottom: freeSpace,
      flexDirection: 'row',
      ...style
    }}
  >
    <Text
      style={{
        fontSize: fontSize.sm,
        color: colors.secondary,
        flex: 1,
        paddingRight: freeSpace / 2
      }}
    >
      {children}
    </Text>
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: 30,
        alignSelf: 'stretch',
        justifyContent: 'center',
        padding: freeSpace / 2,
        paddingRight: 0,
        borderLeftColor: colors.primary,
        borderLeftWidth: 1,
        alignItems: 'center'
      }}
    >
      <Icon
        // style={{ paddingLeft: freeSpace * 2 }}
        name="close"
        size={22}
        color={colors.primary}
      />
    </TouchableOpacity>
  </View>
)
