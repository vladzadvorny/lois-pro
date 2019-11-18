import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import TextTicker from 'react-native-text-ticker'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import moment from 'moment'

import { freeSpace, colors } from '../constants/theme'
import { goToChat } from '../utils/goToChat'
import { convertCoins } from '../utils/convertCoins'

/*
    "accountName": null,
       "channel": "squidward979",
      "chatName": "Squidward979",
       "createdAt": "2018-12-25T13:00:18.000Z",
     "id": "16011737",
      "price": 0.034,
       "type": "plus",
*/

class HistoryCard extends Component {
  render() {
    const {
      task: {
        accountName,
        name,
        createdAt,
        price,
        type,
        attr: { url: chat }
      },
      t
    } = this.props
    const date = moment(createdAt)

    return (
      <View style={styles.main}>
        <Text
          style={{
            fontSize: 12,
            color: colors.black,
            fontStyle: 'italic',
            marginRight: 7,
            marginLeft: freeSpace
          }}
        >
          {date.format('HH:mm')}
        </Text>

        <TouchableOpacity
          style={{
            flex: 1,

            // paddingBottom: 5,
            flexDirection: 'row',
            alignItems: 'center'
          }}
          onPress={() => goToChat(chat)}
        >
          <TextTicker
            style={{ fontSize: 14 }}
            duration={5000}
            loop
            bounce
            repeatSpacer={50}
            marqueeDelay={3000}
          >
            {type === 'income' && (
              <>
                <Text style={{ color: colors.secondary }}>
                  {t('common:you')}
                </Text>
                <Text style={{ color: colors.black, fontSize: 12 }}> (</Text>
                <Text style={{ color: `${colors.black}85`, fontSize: 12 }}>
                  {accountName}
                </Text>
                <Text style={{ color: colors.black, fontSize: 12 }}>)</Text>
              </>
            )}
            {type === 'incomeCanceled' && (
              <>
                <Text style={{ color: '#87bf0a' }}>{t('common:you')}</Text>
                <Text style={{ color: colors.black, fontSize: 12 }}> (</Text>
                <Text style={{ color: `${colors.black}85`, fontSize: 12 }}>
                  {accountName}
                </Text>
                <Text style={{ color: colors.black, fontSize: 12 }}>)</Text>
              </>
            )}
            {type === 'expenses' && (
              <Text style={{ color: '#87bf0a' }}>{accountName}</Text>
            )}
            {type === 'expensesCanceled' && (
              <Text style={{ color: colors.secondary }}>{accountName}</Text>
            )}{' '}
            <Icon
              // style={{ paddingLeft: freeSpace * 2 }}
              name={
                type === 'income' || type === 'expenses'
                  ? 'arrow-right'
                  : 'arrow-left'
              }
              size={12}
              color={
                type === 'income' || type === 'expensesCanceled'
                  ? colors.secondary
                  : '#87bf0a'
              }
            />
            <Text style={{ color: colors.primary }}>{` @${chat} `}</Text>
            <Text style={{ color: colors.black, fontSize: 12 }}> (</Text>
            <Text style={{ color: `${colors.black}85`, fontSize: 12 }}>
              {name}
            </Text>
            <Text style={{ color: colors.black, fontSize: 12 }}>)</Text>
          </TextTicker>
        </TouchableOpacity>

        {/* info */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 5,
            paddingLeft: freeSpace,
            paddingRight: freeSpace
          }}
        >
          <Text
            style={{
              fontSize: 16,
              marginRight: 2,
              color:
                type === 'income' || type === 'expensesCanceled'
                  ? '#87bf0a'
                  : colors.secondary
            }}
          >
            {type === 'income' || type === 'expensesCanceled'
              ? `+${convertCoins(price)}`
              : `-${convertCoins(price)}`}
          </Text>
          <Icon
            // style={{ paddingLeft: freeSpace * 2 }}
            name="coins"
            size={16}
            color={
              type === 'income' || type === 'expensesCanceled'
                ? '#87bf0a'
                : colors.secondary
            }
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: colors.white,
    marginBottom: freeSpace,
    flexDirection: 'row',
    borderRadius: 4,
    elevation: 1,
    alignItems: 'center'
  }
})

export default HistoryCard
