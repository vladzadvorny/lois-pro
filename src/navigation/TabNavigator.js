/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import { colors } from '../constants/theme'

import TabBar from '../components/TabBar'

const config = {
  headerMode: 'none',
  cardStyle: {
    backgroundColor: '#EFEFEF'
  }
}

const MyTasksNavigator = createStackNavigator(
  {
    MyTasks: {
      getScreen: () => require('../screens/MyTasksScreen').default
    }
  },
  config
)

const HistoryNavigator = createStackNavigator(
  {
    History: {
      getScreen: () => require('../screens/HistoryScreen').default
    }
  },
  config
)

export default createBottomTabNavigator(
  {
    MyTasks: MyTasksNavigator,
    History: HistoryNavigator,
    CreateTask: {
      getScreen: () => require('../screens/CreateTaskScreen').default,
      navigationOptions: {
        tabBarVisible: false
      }
    }
  },
  {
    tabBarComponent: props => <TabBar {...props} />
    // tabBarOptions: {
    //   activeTintColor: colors.secondary,
    //   inactiveTintColor: colors.primary
    // }

    // initialRouteName: 'Tasks'
  }
)
