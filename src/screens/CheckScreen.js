/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native'
import moment from 'moment'
import { useTranslation } from 'react-i18next'
import { useSelector, useDispatch } from 'react-redux'
import wretch from 'wretch'

import { freeSpace, colors, borderRadius, fontSize } from '../constants/theme'
import { uri } from '../constants/config'

import Header from '../components/Header'
import { Info } from '../components/Info'
import Loading from '../components/Loading'

const CheckScreen = ({ navigation }) => {
  const { t } = useTranslation(['check', 'purchases', 'common'])
  const [error, setError] = useState(null)
  const me = useSelector(state => state.me)
  const [checkStatus, setCheckStatus] = useState('done')
  const [loading, setLoading] = useState(false)

  // error
  const message = error !== null ? error.message : ''
  const allowable = error !== null ? error.allowable : {}

  useEffect(() => {
    fetchCheck()
  }, [])

  const fetchCheck = async () => {
    setLoading(true)

    try {
      const data = await wretch(uri)
        .url('/check')
        .auth(`Bearer ${me.token}`)
        .get()
        .json()

      if (data.check) {
        setCheckStatus(data.check.status)
      }
    } catch (_error) {
      console.log(_error)
    }

    setLoading(false)
  }

  const getOrder = async () => {
    setLoading(true)

    try {
      const data = await wretch(uri)
        .url(`/check`)
        .auth(`Bearer ${me.token}`)
        .put()
        .json()

      if (data.error) {
        setError(data.error)
      } else {
        setCheckStatus(data.check.status)
      }
    } catch (_error) {
      console.log(_error)
    }

    setLoading(false)
  }

  return (
    <>
      <Header
        title={t('check')}
        navigation={navigation}
        leftElement="arrow-back"
      />

      <ScrollView contentContainerStyle={styles.main}>
        {loading && <Loading over />}

        <Text style={{ fontSize: 28, marginBottom: freeSpace * 3 }}>
          {t('check')}
        </Text>

        <Info>{t('check:info')}</Info>

        {/* check status */}
        {checkStatus !== 'done' && (
          <View
            style={[
              styles.box,
              {
                borderColor: colors.primary,
                backgroundColor: `${colors.primary}20`
              }
            ]}
          >
            <Text style={{ color: colors.primary }}>{t(checkStatus)}</Text>
          </View>
        )}

        {/* error */}
        <View
          style={[
            styles.box,
            {
              marginTop: freeSpace * 2,
              display: message ? 'flex' : 'none'
            }
          ]}
        >
          <Text style={{ color: colors.secondary }}>
            {t(`errors:${message}`, {
              time: moment
                .duration(+allowable.expire / 1000, 'seconds')
                .humanize()
            })}
          </Text>
        </View>

        <View
          style={{
            height: 50,
            marginBottom: freeSpace * 2,
            marginTop: freeSpace * 2
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: colors.primary,
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius,
              paddingRight: freeSpace * 2,
              paddingLeft: freeSpace * 2
            }}
            onPress={() => getOrder()}
          >
            <Text style={{ color: colors.white, fontSize: fontSize.lg }}>
              {t('common:order')}
            </Text>
          </TouchableOpacity>
        </View>

        {/* buy coins */}
        {message === 'CHECK_EXPIRE' && (
          <View
            style={{
              height: 36
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: colors.secondary,
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius,
                paddingRight: freeSpace,
                paddingLeft: freeSpace
              }}
              onPress={() => {
                navigation.navigate('Purchase')
                setError(null)
              }}
            >
              <Text style={{ color: colors.white, fontSize: fontSize.base }}>
                {t('purchase:purchase')}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: freeSpace
  },
  box: {
    marginTop: freeSpace * 2,
    borderWidth: 1,
    borderColor: colors.secondary,
    borderStyle: 'solid',
    padding: freeSpace,
    borderRadius: 8,
    backgroundColor: `${colors.secondary}20`
  }
})

export default CheckScreen
