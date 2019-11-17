import React, { useEffect, useState } from 'react'
import {
  View,
  Alert,
  StyleSheet,
  ScrollView,
  RefreshControl
} from 'react-native'
import ActionButton from 'react-native-action-button'
import wretch from 'wretch'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { NavigationEvents } from 'react-navigation'

import { colors, freeSpace } from '../constants/theme'
import { uri } from '../constants/config'
import { SET_MY_TASKS } from '../store/types'
import { convertCoins } from '../utils/convertCoins'

import Header from '../components/Header'
import MyTask from '../components/MyTask'
import { Instruction } from '../components/Info'
import Loading from '../components/Loading'

const MyTasksScreen = ({ navigation }) => {
  const me = useSelector(state => state.me)
  const myTasks = useSelector(state => state.myTasks)
  const dispatch = useDispatch()
  const setMyTasks = payload => dispatch({ type: SET_MY_TASKS, payload })
  const { t } = useTranslation([
    'myTasks',
    'newTask',
    'purchase',
    'common',
    'errors'
  ])
  const [loading, setLoading] = useState(false)
  const [refreshing, setRefreshing] = useState(false)
  const [error, setError] = useState(null)
  const [focus, setFocus] = useState(false)

  useEffect(() => {
    // setTimeout(() => {
    //   navigation.toggleDrawer()
    // }, 1000)

    fetchMyTasks()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // fetch tasks
  const fetchMyTasks = async () => {
    setLoading(true)

    try {
      const data = await wretch(uri)
        .url('/my-tasks')
        .auth(`Bearer ${me.token}`)
        .get()
        .json()

      setMyTasks([...data.tasks])
    } catch (_error) {
      console.log(_error)
    }

    setLoading(false)
  }

  // refresh my tasks
  const refreshMyTasks = async () => {
    setRefreshing(true)

    try {
      const data = await wretch(uri)
        .url('/my-tasks')
        .auth(`Bearer ${me.token}`)
        .get()
        .json()

      setMyTasks([...data.tasks])
    } catch (_error) {
      console.log(_error)
    }

    setRefreshing(false)
  }

  // toggle task
  const toggleMyTask = async id => {
    setLoading(true)

    try {
      const data = await wretch(uri)
        .url(`/my-tasks/${id}`)
        .auth(`Bearer ${me.token}`)
        .put()
        .json()

      if (data.error) {
        setError(data.error)
      } else {
        setMyTasks(
          myTasks.map(task => {
            if (task.id === data.task.id) {
              return data.task
            }

            return task
          })
        )
      }
    } catch (_error) {
      console.log(_error)
    }

    setLoading(false)
  }

  // delete task
  const deleteMyTask = async id => {
    setLoading(true)

    try {
      const data = await wretch(uri)
        .url(`/my-tasks/${id}`)
        .auth(`Bearer ${me.token}`)
        .delete()
        .json()

      if (data.error) {
        setError(data.error)
      } else {
        setMyTasks(myTasks.filter(task => task.id !== data.task.id))
      }
    } catch (_error) {
      console.log(_error)
    }

    setLoading(false)
  }

  // if (loading) {
  //   return <Loading />
  // }

  return (
    <>
      <NavigationEvents
        onDidFocus={() => setFocus(true)}
        onWillBlur={() => setFocus(false)}
      />

      <Header title={t('myTasks')} navigation={navigation} />

      <View style={styles.main}>
        {loading && <Loading over />}

        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            //  justifyContent: 'center'
            paddingBottom: 80
          }}
          showsVerticalScrollIndicator={false}
          refreshControl={
            // eslint-disable-next-line
            <RefreshControl
              refreshing={refreshing}
              onRefresh={refreshMyTasks}
            />
          }
        >
          {/* <MyTask /> */}

          {myTasks.length === 0 ? (
            // <Text>{t('common:noTasks')}</Text>
            <Instruction t={t} />
          ) : (
            // <Instruction t={t} />
            <>
              {myTasks.map(task => (
                <MyTask
                  key={task.id}
                  task={task}
                  onDelete={() => deleteMyTask(task.id)}
                  onToggle={() => {
                    const difference = parseFloat(
                      convertCoins(
                        parseFloat(me.balance) -
                          parseFloat(task.price) * task.amount
                      )
                    )

                    if (task.status === 'paused' && difference < 0) {
                      Alert.alert(
                        t('common:error'),
                        // eslint-disable-next-line
                        t('newTask:warning', {
                          x: convertCoins(parseFloat(task.price) * task.amount)
                        }),
                        [
                          {
                            text: t('purchase:purchase'),
                            onPress: () => {
                              setError(null)
                              navigation.navigate('Purchase')
                            }
                          },
                          {
                            text: t('common:toEarnMoney'),
                            onPress: () => {
                              setError(null)
                              navigation.navigate('Exchange')
                            }
                          },
                          {
                            text: t('common:ok'),
                            onPress: () => {
                              setError(null)
                            }
                          }
                        ]
                        // { cancelable: false }
                      )
                    } else {
                      toggleMyTask(task.id)
                    }
                  }}
                  t={t}
                />
              ))}
            </>
          )}
        </ScrollView>
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

      {/* error */}
      {error !== null && focus
        ? Alert.alert(
            t('common:error'),
            // eslint-disable-next-line
            t(`errors:${error.message}`) +
              (error.message === 'UNKNOWN_ERROR' ? ` #${error.code}` : ''),
            [
              error.message === 'TASK_NOT_ENOUGH_COINS'
                ? {
                    text: t('purchase:purchase'),
                    onPress: () => {
                      setError(null)
                      navigation.navigate('Purchase')
                    }
                  }
                : null,
              error.message === 'TASK_NOT_ENOUGH_COINS'
                ? {
                    text: t('common:toEarnMoney'),
                    onPress: () => {
                      setError(null)
                      navigation.navigate('Exchange')
                    }
                  }
                : null,
              {
                text: t('common:ok'),
                onPress: () => {
                  setError(null)
                }
              }
            ]
            // { cancelable: false }
          )
        : null}
    </>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: freeSpace,
    paddingBottom: 7
    // justifyContent: 'center',
    // alignItems: 'center'
  }
})

export default MyTasksScreen
