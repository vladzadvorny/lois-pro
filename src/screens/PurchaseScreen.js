/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import TextTicker from 'react-native-text-ticker'
import { useTranslation } from 'react-i18next'
import moment from 'moment'
import RNIap from 'react-native-iap'
import _ from 'lodash'
import { useDispatch, useSelector } from 'react-redux'
import wretch from 'wretch'

import { freeSpace, colors, borderRadius, fontSize } from '../constants/theme'
import { INCREMENT_BALANCE } from '../store/types'
import { uri } from '../constants/config'

import Header from '../components/Header'
import Loading from '../components/Loading'

const PurchaseScreen = ({ navigation }) => {
  const me = useSelector(state => state.me)
  const { t } = useTranslation(['purchases', 'common', 'errors'])
  const [tab, setTab] = useState('purchase')
  const [products, setProducts] = useState([])
  const [purchases, setPurchases] = useState([])
  const [loading, setLoading] = useState(false)
  const tabs = ['purchase', 'history']
  const dispatch = useDispatch()
  const incrementBalance = payload =>
    dispatch({ type: INCREMENT_BALANCE, payload })

  useEffect(() => {
    ;(async () => {
      // eslint-disable-next-line no-unused-vars
      const result = await RNIap.initConnection()
    })()

    RNIap.consumeAllItemsAndroid()
      .then()
      .catch(console.log)

    getProducts()
    getPurchases()

    return () => {
      RNIap.endConnectionAndroid()
    }
  }, [])

  const getProducts = async () => {
    setLoading(true)
    try {
      // await RNIap.consumeAllItemsAndroid()
      // eslint-disable-next-line no-shadow
      let products = await RNIap.getProducts([
        'coins_451',
        'coins_1500',
        'coins_2500',
        'coins_5500'
        // 'test_15'
      ])
      // const products = await RNIap.getProducts(['android.test.purchased'])

      products = products.map(product =>
        // eslint-disable-next-line prefer-object-spread
        Object.assign({}, product, { price: +product.productId.split('_')[1] })
      )
      console.log(products)

      setProducts(_.sortBy(products, ['price']))
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  const getPurchases = async () => {
    try {
      const data = await wretch(uri)
        .url('/purchases/history')
        .auth(`Bearer ${me.token}`)
        .get()
        .json()

      console.log('data', data)
      setPurchases(data.history)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  const onBuy = async _productId => {
    try {
      RNIap.consumeAllItemsAndroid()
        .then()
        .catch(console.log)
      const purchase = await RNIap.requestPurchase(_productId)

      // eslint-disable-next-line
      const { orderId, packageName, productId, purchaseToken } = JSON.parse(
        purchase.transactionReceipt
      )

      // {
      //   orderId: 'GPA.3361-5742-9100-41107',
      //   packageName: 'com.zadvorny.lois',
      //   productId: '15_ololo',
      //   purchaseTime: 1549993020463,
      //   purchaseState: 0,
      //   purchaseToken:
      //     'dfiaedjh
      // }
      // https://www.googleapis.com/androidpublisher/v3/applications/com.zadvorny.lois/purchases/products/android.test.purchased/tokens/inapp:com.zadvorny.lois:android.test.purchased

      const data = await wretch(uri)
        .url('/purchases/google-play')
        .auth(`Bearer ${me.token}`)
        .post({
          orderId,
          packageName,
          productId,
          purchaseToken
        })
        .json()

      console.log('data', data)
      if (!data.error) {
        setPurchases([data.purchase, ...purchases])

        incrementBalance(+productId.split('_')[1] / 100)
        navigation.goBack()
      } else {
        Alert.alert(
          t('common:error'),
          // eslint-disable-next-line
          t(`errors:${data.error.message}`) + ' ' + data.error.code
        )
      }
    } catch (err) {
      console.warn(err)
    }
  }

  return (
    <>
      <Header
        title={t('purchases')}
        navigation={navigation}
        leftElement="arrow-back"
      />

      <View style={styles.main}>
        {loading && <Loading over />}

        <View style={{ alignItems: 'center', marginBottom: freeSpace }}>
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
                  {t(`purchase:${tabName}`)}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* purchase */}
        {tab === 'purchase' && (
          <>
            {products.map(product => (
              <View
                style={{
                  backgroundColor: colors.white,
                  marginBottom: freeSpace,
                  flexDirection: 'row',
                  borderRadius: 4,
                  elevation: 1,
                  padding: freeSpace,
                  alignItems: 'center'
                }}
                key={product.productId}
              >
                <View style={{ flex: 1 }}>
                  <TextTicker
                    style={{ fontSize: fontSize.base }}
                    duration={5000}
                    loop
                    bounce
                    repeatSpacer={50}
                    marqueeDelay={3000}
                  >
                    {product.description}
                  </TextTicker>
                </View>

                <TouchableOpacity
                  style={[styles.button, { marginLeft: freeSpace }]}
                  onPress={() => onBuy(product.productId)}
                >
                  <Text style={{ fontSize: 12, color: colors.white }}>
                    {product.localizedPrice}
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </>
        )}

        {/* history */}
        {tab === 'history' && (
          <>
            {purchases.length === 0 ? (
              <Text>{t('common:noHistory')}</Text>
            ) : (
              <>
                {purchases.map(purchase => (
                  <View
                    style={{
                      backgroundColor: colors.white,
                      marginBottom: freeSpace,
                      flexDirection: 'row',
                      borderRadius: 4,
                      elevation: 1,
                      padding: freeSpace,
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                    key={purchase.productId}
                  >
                    <Text>
                      {moment(purchase.createdAt).format('D MMMM YYYY HH:mm')}
                    </Text>
                    <Text style={{ color: colors.secondary }}>
                      {t(`xCoins`, { x: purchase.productId.split('_')[1] })}
                    </Text>
                  </View>
                ))}
              </>
            )}
          </>
        )}
      </View>
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
  },
  button: {
    height: 26,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: colors.primary,
    borderStyle: 'solid',
    borderRadius: 4,
    paddingLeft: 5,
    paddingRight: 5
  }
})

export default PurchaseScreen
