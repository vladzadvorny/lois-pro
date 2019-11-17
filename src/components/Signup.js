/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Clipboard,
  ToastAndroid,
  AsyncStorage,
  Switch
} from 'react-native'
import { connect } from 'react-redux'
import wretch from 'wretch'

import Loading from './Loading'

import { freeSpace, colors, fontSize } from '../constants/theme'
import { botName, uri } from '../constants/config'
import { goToChat } from '../utils/goToChat'
import { SET_USE_WEB_LINKS } from '../store/types'

class Signup extends Component {
  state = {
    time: 60,
    code: '',
    now: Date.now(),
    isReady: false
  }

  componentDidMount() {
    // get code
    wretch(uri)
      .url('/auth/tg')
      .get()
      .json(data => {
        const { code, time } = data

        this.setState({ code, time, isReady: true })
        this.timer(true, time)
        this.getTokensTimer(true, code)
      })
      .catch(error => console.log(error))
  }

  getTokens = async code => {
    const { navigation } = this.props

    wretch(uri)
      .url('/auth/tg')
      .put({ code })
      .json(async data => {
        console.log('token', data.token)

        if (data.token) {
          // set local storage
          await AsyncStorage.setItem('@token', data.token)

          this.timer(false)
          navigation.navigate('Splash')
        }
      })
      .catch(error => console.log(error))
  }

  getTokensTimer(start, code = '') {
    if (start) {
      this.g = setInterval(() => {
        this.getTokens(code)
      }, 3000)
    } else {
      clearInterval(this.g)
    }
  }

  checkTokens = async code => {
    await this.getTokens(code)
  }

  // life timer
  timer(start, time = 60) {
    /* eslint-disable react/destructuring-assignment */
    const { onCancel } = this.props

    if (start) {
      // eslint-disable-next-line
      const _t = this.state.now + time * 1000
      this.t = setInterval(() => {
        if (this.state.time > 1) {
          this.setState({
            time: Math.ceil((_t - Date.now()) / 1000)
          })
        } else {
          clearInterval(this.t) //
          this.timer(false)
        }
      }, 1000)
    } else {
      clearInterval(this.t)
      this.getTokensTimer(false)
      this.setState({ time: 60 })
      onCancel()
    }
    /* eslint-enable */
  }

  render() {
    /* eslint-disable no-shadow */
    const { t, dispatch, useWebLinks } = this.props
    const { time, code, isReady } = this.state

    if (!isReady) {
      return <Loading />
    }

    return (
      <ScrollView contentContainerStyle={styles.main}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: freeSpace * 2,
            paddingRight: freeSpace * 2,
            paddingBottom: freeSpace,
            borderBottomWidth: 1,
            borderColor: colors.secondary,
            borderStyle: 'solid'
          }}
        >
          <Text style={{ fontSize: fontSize.sm, color: colors.black }}>
            {t('settings:useWebLinks')}:
          </Text>
          <Switch
            onValueChange={async value => {
              // setUseWebLinks(value)
              dispatch({ type: SET_USE_WEB_LINKS, payload: value })
              try {
                await AsyncStorage.setItem(
                  '@Settings:useWebLinks',
                  value ? '1' : '0'
                )
              } catch (error) {
                console.log(error)
              } // eslint-disable-line
            }}
            value={useWebLinks}
          />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text style={{ fontSize: 28, marginBottom: freeSpace * 3 }}>
            {t('authWithTelegram')}
          </Text>
          <Text style={styles.text}>{t('goToBot')}:</Text>

          {/* button */}
          <View
            style={{
              height: 50,
              marginTop: freeSpace,
              marginBottom: freeSpace * 3
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
              onPress={() => goToChat(botName, code)}
            >
              <Text style={{ color: colors.white, fontSize: fontSize.lg }}>
                {`@${botName}`}
              </Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.text}>{t('orSend')}:</Text>
          <TouchableOpacity
            style={{
              width: '30%',
              marginTop: freeSpace
            }}
            onPress={() => {
              Clipboard.setString(code.toUpperCase())
              ToastAndroid.show(t('common:textCopied'), ToastAndroid.SHORT)
            }}
          >
            <TextInput
              editable={false}
              selectTextOnFocus={false}
              value={code.toUpperCase()}
              style={styles.code}
              underlineColorAndroid="transparent"
            />
          </TouchableOpacity>
        </View>
        {/* footer */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 15,
            paddingBottom: 5,
            borderTopWidth: 1,
            borderColor: colors.secondary,
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
              onPress={() => this.timer(false)}
            >
              <Text style={{ color: colors.white, fontSize: fontSize.base }}>
                {`${t('common:cancel')} (${time})`}
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => this.checkTokens(code)}
            style={{
              justifyContent: 'center',
              width: '60%'
            }}
          >
            <Text style={{ fontSize: fontSize.sm, textAlign: 'right' }}>
              {t('notPassAutomatically')}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: freeSpace,
    backgroundColor: colors.white,
    paddingTop: freeSpace + 24 // status bar
  },
  text: {
    color: colors.black,
    marginBottom: freeSpace,
    fontSize: fontSize.base
  },
  code: {
    backgroundColor: '#e1e1e1',
    width: '100%',
    textAlign: 'center',
    color: colors.black,
    height: 42,
    borderRadius: 4,
    fontSize: fontSize.base
  }
})

const mapStateToProps = state => ({
  useWebLinks: state.app.useWebLinks
})

const mapDispatchToProps = dispatch => ({
  dispatch
})

// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, mapDispatchToProps)(Signup)
