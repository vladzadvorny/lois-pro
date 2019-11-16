import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { colors, fontSize } from '../constants/theme'

const TabBar = ({ navigation }) => {
  const { routes, index } = navigation.state
  const filteredRoutes = routes.filter(r => r.routeName !== 'CreateTask')
  const icons = ['check', 'history']
  const names = ['My Tasks', 'History']

  return (
    <View style={styles.main}>
      {filteredRoutes.map((route, i) => (
        <View style={styles.item} key={i.toString()}>
          <TouchableOpacity
            style={styles.itemTouchable}
            onPress={() => navigation.navigate(route.routeName)}
          >
            <MaterialIcons
              name={icons[i]}
              size={index === i ? 28 : 24}
              color={colors.secondary}
            />
            <Text style={styles.itemTitle}>{names[i]}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    height: 50,
    backgroundColor: colors.white,
    borderTopColor: colors.secondary,
    borderTopWidth: 1,
    flexDirection: 'row',
    paddingBottom: 2
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch'
  },
  itemTouchable: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  itemTitle: {
    fontSize: fontSize.sm
  }
})
export default TabBar
