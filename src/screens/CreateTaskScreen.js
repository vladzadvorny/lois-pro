import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Clipboard,
  ToastAndroid,
  TextInput,
  Slider,
  TouchableOpacity
} from 'react-native'
import { useTranslation } from 'react-i18next'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import wretch from 'wretch'
import { useSelector, useDispatch } from 'react-redux'

import { freeSpace, colors, fontSize, borderRadius } from '../constants/theme'
import { botName, uri } from '../constants/config'
import { InfoStorage } from '../utils/infoStorage'
import { SET_MY_TASKS } from '../store/types'

import Header from '../components/Header'
import { InfoClose } from '../components/Info'
import Loading from '../components/Loading'

const color = (fields, field) =>
  fields.indexOf(field) === -1 ? colors.primary : colors.secondary

const errorMessage = (t, message) => {
  switch (message) {
    case 'TASK_PRICE_INCORRECT':
      return t(`errors:${message}`, { min: 4.8, max: 14.8 })

    case 'TASK_AMOUNT_INCORRECT':
      return t(`errors:${message}`, { min: 5, max: 999 })

    default:
      return t(`errors:${message}`)
  }
}

const CreateTaskScreen = ({ navigation }) => {
  const me = useSelector(state => state.me)
  const myTasks = useSelector(state => state.myTasks)
  const dispatch = useDispatch()
  const setMyTasks = payload => dispatch({ type: SET_MY_TASKS, payload })
  const { t } = useTranslation(['newTask', 'common', 'errors'])
  const [error, setError] = useState(null)
  const [chat, setChat] = useState('')
  const [price, setPrice] = useState(5.6)
  const [amount, setAmount] = useState(50)
  const [hideInfo, setHideInfo] = useState(false)
  const [loading, setLoading] = useState(false)
  // eslint-disable-next-line one-var
  let sliderPrice, sliderAmount

  // error
  const message = error !== null ? error.message : ''
  const fields = error !== null ? error.fields : []
  // const allowable = error !== null ? error.allowable : {}

  useEffect(() => {
    ;(async () => {
      const info = await InfoStorage.get()

      if (info.hideNewTask) {
        setHideInfo(true)
      }
    })()
  }, [])

  const onSend = async () => {
    setLoading(true)

    try {
      const data = await wretch(uri)
        .url('/my-tasks')
        .auth(`Bearer ${me.token}`)
        .post({
          chat,
          price: price / 100,
          amount,
          type: 'tg_members'
        })
        .json()

      console.log('data', data)

      if (data.error) {
        setError(data.error)
      } else {
        setMyTasks([data.task, ...myTasks])
        navigation.navigate('MyTasks')
        return
      }
    } catch (_error) {
      console.log(_error)
    }

    setLoading(false)
  }

  return (
    <>
      <Header title={t('newTask')} navigation={navigation} leftElement={null} />

      <ScrollView contentContainerStyle={styles.main}>
        {loading && <Loading over />}

        <View style={{ marginBottom: freeSpace }}>
          <Text style={styles.step}>
            {t('common:step', { step: 1 })}: {t('botAdmin')}
          </Text>
          <Text style={styles.text}>
            {t('botAdminInst')}:{' '}
            <Text
              style={{ color: colors.primary }}
              onPress={() => {
                Clipboard.setString(botName)
                ToastAndroid.show('Текст скопирован', ToastAndroid.SHORT)
              }}
            >
              {`@${botName}`}
            </Text>
          </Text>

          <Text style={styles.step}>
            {t('common:step', { step: 2 })}: {t('createTask')}
          </Text>

          {/* error */}
          <View style={[styles.error, { display: message ? 'flex' : 'none' }]}>
            <Text style={{ color: colors.secondary }}>
              {errorMessage(t, message)}
            </Text>
          </View>

          <View style={{ marginTop: freeSpace }}>
            <Text
              style={{
                fontSize: fontSize.sm,
                color: color(fields, 'chat')
              }}
            >
              {t('chat')}
            </Text>
            <TextInput
              underlineColorAndroid="transparent"
              selectionColor={colors.primary}
              style={{
                height: 44,
                borderWidth: 1,
                borderColor: color(fields, 'chat'),
                borderStyle: 'solid',
                borderRadius,
                padding: freeSpace
              }}
              placeholder="@channel or @supergroup"
              placeholderTextColor={`${color(fields, 'chat')}99`}
              value={chat}
              // eslint-disable-next-line
              onChangeText={chat => setChat(chat)}
              onFocus={() => setError(null)}
            />
          </View>

          {/* price slider */}
          <View style={{ marginTop: freeSpace }}>
            <Text
              style={{
                fontSize: fontSize.sm,
                color: color(fields, 'price')
              }}
            >
              {`${t('pricePerSubscriber')}, `}
              <Icon
                // style={{ paddingLeft: freeSpace * 2 }}
                name="coins"
                size={12}
                color={colors.primary}
              />
            </Text>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                height: 44,
                borderWidth: 1,
                borderColor: color(fields, 'price'),
                borderStyle: 'solid',
                borderRadius,
                padding: freeSpace,
                paddingRight: 3
              }}
            >
              <Text style={{ fontSize: fontSize.base }}>
                {parseFloat(price).toFixed(1)}
              </Text>
              <Slider
                style={{ flex: 1 }}
                thumbTintColor={colors.primary}
                minimumTrackTintColor={colors.primary}
                step={0.2}
                minimumValue={4.8}
                maximumValue={14.8}
                value={price}
                // eslint-disable-next-line
                onValueChange={price => {
                  clearTimeout(sliderPrice)
                  sliderPrice = setTimeout(() => {
                    setPrice(price)
                  }, 20)
                }}
                onSlidingComplete={val => console.log(val)}
              />
            </View>
          </View>

          {/* amount slider */}
          <View style={{ marginTop: freeSpace }}>
            <Text
              style={{
                fontSize: fontSize.sm,
                color: color(fields, 'amount')
              }}
            >
              {t('amount')}
            </Text>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                height: 44,
                borderWidth: 1,
                borderColor: color(fields, 'amount'),
                borderStyle: 'solid',
                borderRadius,
                padding: freeSpace,
                paddingRight: 3
              }}
            >
              <Text style={{ fontSize: fontSize.base }}>{amount}</Text>
              <Slider
                style={{ flex: 1 }}
                thumbTintColor={colors.primary}
                minimumTrackTintColor={colors.primary}
                step={1}
                minimumValue={5}
                maximumValue={999}
                value={amount}
                // eslint-disable-next-line
                onValueChange={amount => {
                  clearTimeout(sliderAmount)
                  sliderAmount = setTimeout(() => {
                    setAmount(amount)
                  }, 20)
                }}
                onSlidingComplete={val => console.log(val)}
              />
            </View>
          </View>

          <View
            style={{
              marginTop: freeSpace,
              borderWidth: 1,
              borderColor: colors.primary,
              borderRadius,
              borderStyle: 'solid',
              padding: freeSpace,
              backgroundColor: `${colors.primary}20`
            }}
          >
            <Text>
              {t('errors:TASK_NOT_ENOUGH_COINS', {
                x: Math.round(price * amount)
              })}
            </Text>
          </View>
        </View>

        {!hideInfo && (
          <InfoClose
            onPress={async () => {
              await InfoStorage.set({ hideNewTask: true })
              setHideInfo(true)
            }}
          >
            {t('common:exchangeNewTask')}
          </InfoClose>
        )}

        {/* footer */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10,
            // paddingBottom: 5,
            borderTopWidth: 1,
            borderColor: colors.primary,
            borderStyle: 'solid'
          }}
        >
          <View
            style={{
              height: 40
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: colors.secondary,
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 4,
                paddingRight: freeSpace * 2,
                paddingLeft: freeSpace * 2
              }}
              onPress={() => navigation.navigate('MyTasks')}
            >
              <Text style={{ color: colors.white, fontSize: fontSize.base }}>
                {t('common:cancel')}
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              height: 40
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: colors.primary,
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 4,
                paddingRight: freeSpace * 2,
                paddingLeft: freeSpace * 2
              }}
              onPress={() => onSend(false)}
            >
              <Text style={{ color: colors.white, fontSize: fontSize.base }}>
                {t('common:save')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  main: {
    padding: freeSpace,
    backgroundColor: colors.white,
    paddingTop: freeSpace * 2
  },
  step: {
    marginBottom: 5,
    fontSize: fontSize.base,
    borderBottomWidth: 1,
    borderColor: colors.secondary,
    borderStyle: 'solid',
    fontWeight: 'bold'
  },
  text: {
    fontSize: fontSize.base,
    marginBottom: freeSpace
  },
  error: {
    marginTop: freeSpace,
    borderWidth: 1,
    borderColor: colors.secondary,
    borderStyle: 'solid',
    padding: freeSpace,
    borderRadius,
    backgroundColor: `${colors.secondary}20`
  }
})

export default CreateTaskScreen
