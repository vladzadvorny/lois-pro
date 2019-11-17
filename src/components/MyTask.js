import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
  Keyboard
} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon from 'react-native-vector-icons/MaterialIcons'
import TextTicker from 'react-native-text-ticker'

import { freeSpace, colors } from '../constants/theme'
import { goToChat } from '../utils/goToChat'
import { convertCoins } from '../utils/convertCoins'

export default class MyTask extends Component {
  render() {
    const { task, onDelete, onToggle, t } = this.props

    const { price, amount, status, completed, item } = task
    const { name, attr } = item

    return (
      <View
        style={{
          backgroundColor: colors.white,
          marginBottom: freeSpace,
          flexDirection: 'row',
          borderRadius: 4,
          elevation: 1
        }}
      >
        <TouchableOpacity
          style={{
            flex: 1,
            padding: freeSpace,
            paddingTop: 7,
            // paddingBottom: 5,
            justifyContent: 'space-between'
          }}
          onPress={() => goToChat(attr.url)}
        >
          <TextTicker
            style={{ fontSize: 12, color: colors.primary }}
            duration={5000}
            loop
            bounce
            repeatSpacer={50}
            marqueeDelay={3000}
          >
            {`@${attr.url} — `}
            {status === 'paused' && (
              <Text style={{ fontStyle: 'italic', color: colors.secondary }}>
                {t('paused')}
              </Text>
            )}
            {status === 'playing' && (
              <Text style={{ fontStyle: 'italic', color: '#87bf0a' }}>
                {t('playing')}
              </Text>
            )}
          </TextTicker>
          <TextTicker
            style={{
              fontSize: 14,
              alignItems: 'center'
            }}
            duration={5000}
            loop
            bounce
            repeatSpacer={50}
            marqueeDelay={3000}
          >
            {name}
          </TextTicker>
        </TouchableOpacity>

        {/* info */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: freeSpace,
            paddingLeft: 1
          }}
        >
          <View style={{ alignItems: 'center' }}>
            <View
              style={{
                borderBottomWidth: 1,
                borderColor: colors.primary,
                borderStyle: 'solid',
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%'
              }}
            >
              <MaterialCommunityIcons
                // style={{ paddingLeft: freeSpace * 2 }}
                name="coins"
                size={11}
                color={colors.secondary}
              />
              <Text style={{ fontSize: 12, marginLeft: 2 }}>
                {convertCoins(price)}
              </Text>
            </View>
            <Text style={{ fontSize: 12 }}>
              <Text style={{ fontWeight: 'bold' }}>{amount}</Text>/
              {completed.toString()}
            </Text>
          </View>

          <TouchableOpacity
            style={[
              styles.button,
              { marginLeft: freeSpace, borderColor: colors.secondary }
            ]}
            onPress={() =>
              Alert.alert(
                'Delete Task',
                'Are you sure you want to delete?',
                [
                  {
                    text: 'No',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel'
                  },
                  {
                    text: 'Yes',
                    onPress: () => {
                      onDelete()
                      Keyboard.dismiss()
                    }
                  }
                ]
                // { cancelable: false }
              )
            }
          >
            <Icon
              // style={{ paddingLeft: freeSpace * 2 }}
              name="close"
              size={22}
              color={colors.secondary}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.button,
              {
                marginLeft: freeSpace,
                borderColor: status === 'playing' ? '#87bf0a' : colors.secondary
              }
            ]}
            onPress={() => onToggle()}
          >
            {status === 'playing' && (
              <Icon
                // style={{ paddingLeft: freeSpace * 2 }}
                name="pause"
                size={22}
                color="#87bf0a"
              />
            )}
            {status === 'paused' && (
              <Icon
                // style={{ paddingLeft: freeSpace * 2 }}
                name="play-arrow"
                size={22}
                color={colors.secondary}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: freeSpace,
    backgroundColor: colors.white,
    paddingTop: freeSpace * 2
  },
  button: {
    height: 26,
    width: 26,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.primary,
    borderStyle: 'solid',
    borderRadius: 4
  }
})

// export default MyTask
