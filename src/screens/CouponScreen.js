import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native'
import { useTranslation } from 'react-i18next'
import wretch from 'wretch'
import { useSelector, useDispatch } from 'react-redux'

import { freeSpace, colors, borderRadius, fontSize } from '../constants/theme'
import { goToChat } from '../utils/goToChat'
import { uri } from '../constants/config'
import { convertCoins } from '../utils/convertCoins'

import Header from '../components/Header'
import { Info } from '../components/Info'
import Loading from '../components/Loading'
import { INCREMENT_BALANCE } from '../store/types'

const CouponScreen = ({ navigation }) => {
  const { t } = useTranslation(['coupon', 'common'])
  const me = useSelector(state => state.me)
  const dispatch = useDispatch()
  const incrementBalance = payload =>
    dispatch({ type: INCREMENT_BALANCE, payload })
  const [code, setCode] = useState('')
  const [error, setError] = useState(null)
  const [testWidth, setTestWidth] = useState('99%')
  const [loading, setLoading] = useState(false)
  const color = (fields, field) =>
    fields.indexOf(field) === -1 ? colors.black : colors.secondary

  // error
  const message = error !== null ? error.message : ''
  const fields = error !== null ? error.fields : []
  const allowable = error !== null ? error.allowable : {}

  useEffect(() => {
    setTimeout(() => {
      setTestWidth('100%')
    }, 100)
  }, [])

  // send coupon
  // eslint-disable-next-line no-shadow
  const send = async code => {
    setLoading(true)

    try {
      const data = await wretch(uri)
        .url(`/coupons/${code || null}`)
        .auth(`Bearer ${me.token}`)
        .put()
        .json()

      if (data.error) {
        setError(data.error)
      } else {
        incrementBalance(parseFloat(data.value))
        setError(null)
        Alert.alert(
          t('done'),
          `+${convertCoins(data.value)}`,
          [
            {
              text: 'Ok',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel'
            }
          ]
          // { cancelable: false }
        )
      }
    } catch (_error) {
      console.log(_error)
    }

    setLoading(false)
  }

  return (
    <>
      <Header
        title={t('coupon')}
        navigation={navigation}
        leftElement="arrow-back"
      />

      <View style={styles.main}>
        {loading && <Loading over />}

        <Text style={{ fontSize: 28, marginBottom: freeSpace * 3 }}>
          {t('coupon')}
        </Text>

        <Info>
          {t('coupon:info')}
          {': '}
          <Text
            style={{ fontSize: fontSize.sm, color: colors.primary }}
            onPress={() => goToChat('LoisAdminsBot')}
          >
            @loisadminsbot
          </Text>
        </Info>

        {/* error */}
        <View style={[styles.error, { display: message ? 'flex' : 'none' }]}>
          <Text style={{ color: colors.secondary }}>
            {t(`errors:${message}`, allowable)}
          </Text>
        </View>

        <View style={{ marginTop: freeSpace, width: 200 }}>
          <Text
            style={{
              fontSize: fontSize.sm,
              color: color(fields, 'code')
            }}
          >
            {t('couponCode')}
          </Text>
          <TextInput
            underlineColorAndroid="transparent"
            selectionColor={colors.primary}
            style={{
              height: 44,
              borderWidth: 1,
              borderColor: color(fields, 'code'),
              borderStyle: 'solid',
              // borderRadius,
              padding: freeSpace,
              // eslint-disable-next-line
              width: testWidth
            }}
            placeholder="SKE83LS03D7F"
            placeholderTextColor={`${color(fields, 'code')}99`}
            value={code}
            // eslint-disable-next-line
            onChangeText={code => setCode(code)}
            onFocus={() => setError(null)}
          />
        </View>

        <View
          style={{
            height: 50,
            marginBottom: freeSpace * 3,
            marginTop: freeSpace * 3
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
            onPress={() => send(code)}
          >
            <Text style={{ color: colors.white, fontSize: fontSize.lg }}>
              {t('activate')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white
  },
  error: {
    marginTop: freeSpace * 2,
    borderWidth: 1,
    borderColor: colors.secondary,
    borderStyle: 'solid',
    padding: freeSpace,
    borderRadius: 8,
    backgroundColor: `${colors.secondary}20`
  }
})

export default CouponScreen
