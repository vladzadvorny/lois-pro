import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useSelector } from 'react-redux'

import { colors, freeSpace, fontSize } from '../constants/theme'
import { convertCoins } from '../utils/convertCoins'

const Header = ({ navigation, title, leftElement = 'menu' }) => {
  const me = useSelector(state => state.me)

  return (
    <View style={styles.main}>
      <View style={styles.left}>
        {leftElement === 'menu' && (
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Icon
              style={{ width: 25, textAlign: 'center' }}
              name="menu"
              size={26}
              color={colors.white}
            />
          </TouchableOpacity>
        )}

        {leftElement === 'arrow-back' && (
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Icon
              style={{ width: 25, textAlign: 'center' }}
              name="arrow-left"
              size={26}
              color={colors.white}
            />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.center}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.right}>
        <TouchableOpacity onPress={() => navigation.navigate('Purchase')}>
          <View style={styles.coins}>
            {/* <MaterialCommunityIcons
              name="coins"
              size={16}
              color={colors.secondary}
            /> */}
            <Icon
              // style={{ width: 25, textAlign: 'center' }}
              name="coins"
              size={16}
              color={colors.secondary}
            />
            <Text style={styles.coinsValue}>{convertCoins(me.balance)}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    paddingTop: 24,
    height: 56 + 24,
    alignItems: 'center',
    backgroundColor: colors.primary,
    flexDirection: 'row',
    paddingLeft: freeSpace * 2,
    paddingRight: freeSpace * 2
  },
  left: {
    width: 60
  },
  center: {
    flex: 1
  },
  right: {
    // width: 70,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  title: {
    color: colors.white,
    fontSize: fontSize.lg,
    fontWeight: 'bold'
  },
  coins: {
    backgroundColor: colors.white,
    paddingTop: 4,
    paddingLeft: 7,
    paddingRight: 7,
    paddingBottom: 3,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  coinsValue: {
    fontSize: fontSize.sm,
    fontWeight: 'bold',
    marginTop: -2,
    marginLeft: 5
  }
})

export default Header
