import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'

import { colors, freeSpace, fontSize } from '../constants/theme'

const Header = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <View style={styles.left}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <MaterialIcons name="menu" size={26} color={colors.white} />
        </TouchableOpacity>
      </View>
      <View style={styles.center}>
        <Text style={styles.title}>Center</Text>
      </View>
      <View style={styles.right}>
        <TouchableOpacity onPress={() => navigation.navigate('Purchase')}>
          <View style={styles.coins}>
            <MaterialCommunityIcons
              name="coins"
              size={16}
              color={colors.secondary}
            />
            <Text style={styles.coinsValue}>123</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    height: 56,
    alignItems: 'center',
    backgroundColor: colors.primary,
    flexDirection: 'row',
    paddingLeft: freeSpace * 2,
    paddingRight: freeSpace * 2
  },
  left: {
    width: 70
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
    marginLeft: 7
  }
})

export default Header
