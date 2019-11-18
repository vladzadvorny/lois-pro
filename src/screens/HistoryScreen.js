import React, { useState, useEffect, Fragment } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  RefreshControl
} from 'react-native'
import ActionButton from 'react-native-action-button'
import { useTranslation } from 'react-i18next'
import wretch from 'wretch'
import moment from 'moment'
import { useSelector, useDispatch } from 'react-redux'
import InfiniteScroll from 'react-native-infinite-scroll'

import { freeSpace, borderRadius, colors } from '../constants/theme'
import { uri } from '../constants/config'
import { SET_HISTORY } from '../store/types'

import Header from '../components/Header'
import HistoryCard from '../components/HistoryCard'
import Loading from '../components/Loading'

const HistoryScreen = ({ navigation }) => {
  const me = useSelector(state => state.me)
  const history = useSelector(state => state.history)
  const dispatch = useDispatch()
  const setHistory = payload => dispatch({ type: SET_HISTORY, payload })
  const { t } = useTranslation(['history', 'common', 'errors'])
  const [tab, setTab] = useState('expenses')
  const [loading, setLoading] = useState(false)
  const [refreshing, setRefreshing] = useState(false)
  const [loadingMore, setLoadingMore] = useState(false)
  const tabs = ['expenses', 'expensesCanceled']

  useEffect(() => {
    if (!history[tab].length) {
      fetchHistory(tab)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])

  // refresh history
  // eslint-disable-next-line no-shadow
  const fetchHistory = async (tab, limit = 30, offset = 0) => {
    if (offset) {
      setLoadingMore(true)
    } else {
      setLoading(true)
    }

    const arr = tab.split(/(?=[A-Z])/)
    let query = `type=${arr[0]}&limit=${limit}&offset=${offset}`

    if (arr.indexOf('canceled') + 1) {
      query = `${query}&canceled=1`
    }

    try {
      const data = await wretch(uri)
        .url(`/history?${query}`)
        .auth(`Bearer ${me.token}`)
        .get()
        .json()

      const newHistory = { ...history }
      newHistory[tab] = [...history[tab], ...data[arr[0]]]
      setHistory(newHistory)

      // const newHistoryCount = { ...historyCount }
      // newHistoryCount[tab] = data.count
      // setHistoryCount(newHistoryCount)
    } catch (_error) {
      console.log(_error)
    }

    setLoading(false)
    setLoadingMore(false)
  }

  // fetch tasks
  // eslint-disable-next-line no-shadow
  const refreshHistory = async (tab, limit = 30, offset = 0) => {
    setRefreshing(true)

    const arr = tab.split(/(?=[A-Z])/)
    let query = `type=${arr[0]}&limit=${limit}&offset=${offset}`

    if (arr.indexOf('canceled') + 1) {
      query = `${query}&canceled=1`
    }

    try {
      const data = await wretch(uri)
        .url(`/history?${query}`)
        .auth(`Bearer ${me.token}`)
        .get()
        .json()

      const newHistory = { ...history }
      newHistory[tab] = data[arr[0]]
      setHistory(newHistory)

      // const newHistoryCount = { ...historyCount }
      // newHistoryCount[tab] = data.count
      // setHistoryCount(newHistoryCount)
    } catch (_error) {
      console.log(_error)
    }

    setRefreshing(false)
  }

  const dataByDays = {}
  history[tab].forEach(item => {
    const date = new Date(item.createdAt)
    date.setHours(0)
    date.setMinutes(0)
    date.setSeconds(0)
    date.setMilliseconds(0)

    if (!dataByDays[+date]) {
      dataByDays[+date] = []
    }

    dataByDays[+date].push(item)
  })

  return (
    <>
      <Header title={t('history')} navigation={navigation} />

      <View style={styles.main}>
        {loading && <Loading over />}

        {/* tabs */}
        <View style={{ alignItems: 'center' }}>
          <View style={styles.toggle}>
            {tabs.map((tabName, index) => (
              <TouchableOpacity
                key={tabName}
                style={[
                  styles.toggleItem,
                  {
                    backgroundColor:
                      tab === tabName ? colors.primary : colors.white,
                    borderTopLeftRadius: index === 0 ? borderRadius : 0,
                    borderBottomLeftRadius: index === 0 ? borderRadius : 0,
                    borderTopRightRadius:
                      index === tabs.length - 1 ? borderRadius : 0,
                    borderBottomRightRadius:
                      index === tabs.length - 1 ? borderRadius : 0

                    // borderRadius: 0
                  }
                ]}
                onPress={() => setTab(tabName)}
              >
                <Text
                  style={{
                    color: tab === tabName ? colors.white : colors.black
                  }}
                >
                  {t(`history:${tabName}`)}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* scroll */}
        <InfiniteScroll
          contentContainerStyle={{
            flexGrow: 1,
            //  justifyContent: 'center'
            paddingBottom: freeSpace
          }}
          showsVerticalScrollIndicator={false}
          refreshControl={
            // eslint-disable-next-line
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => refreshHistory()}
            />
          }
          // onLoadMoreAsync={() => {
          //   if (
          //     Infinity - history[tab].length > 0 &&
          //     !loading &&
          //     !loadingMore
          //   ) {
          //     fetchHistory(30, history[tab].length)
          //     console.log('load')
          //   }
          // }}
        >
          {history[tab].length === 0 ? (
            <Text>{t('common:noHistory')}</Text>
          ) : (
            <>
              {Object.keys(dataByDays).map(item => (
                <Fragment key={item}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      marginBottom: 2
                    }}
                  >
                    <Text style={{ color: `${colors.black}85` }}>
                      {moment(new Date(+item)).format('D MMMM YYYY')}
                    </Text>
                  </View>

                  {dataByDays[item].map(task => (
                    <HistoryCard
                      task={{ ...task, type: tab }}
                      key={task.id}
                      t={t}
                    />
                  ))}
                </Fragment>
              ))}
            </>
          )}
        </InfiniteScroll>
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
    padding: freeSpace,
    paddingBottom: 7
  },
  toggle: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius,
    marginBottom: 7,
    elevation: 1
  },
  toggleItem: {
    padding: 2,
    paddingLeft: 10,
    paddingRight: 10
    // borderRadius
  }
})

export default HistoryScreen
