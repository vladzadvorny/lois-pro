/* eslint-disable react/jsx-curly-newline */
import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
  Alert,
  AsyncStorage,
  FlatList
} from 'react-native'
import { useTranslation } from 'react-i18next'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { images } from '../constants/images'
import { colors, freeSpace, fontSize } from '../constants/theme'

const Drawer = ({ navigation }) => {
  const { t } = useTranslation([
    'settings',
    'about',
    'coupon',
    'purchases',
    'check',
    'newTask',
    'common'
  ])
  const menu = [
    { key: t('newTask:newTask'), icon: 'plus', screen: 'CreateTask' },
    { key: t('purchases:purchases'), icon: 'credit-card', screen: 'Purchase' },
    { key: t('coupon:coupon'), icon: 'ticket-percent', screen: 'Coupon' },
    { key: t('check:check'), icon: 'check-circle', screen: 'Check' },
    { key: t('settings'), icon: 'settings', screen: 'Settings' },
    { key: t('about:about'), icon: 'information', screen: 'About' }
  ]

  return (
    <View style={styles.main}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.logo}>
          <ImageBackground source={images.bg} style={styles.logoBackground}>
            <View style={styles.logoImageContainer}>
              <Image
                style={{
                  width: 80,
                  height: 80,
                  marginLeft: 10
                }}
                resizeMode="contain"
                source={images.logo}
              />
            </View>

            {/* logo bottom line */}
            <View style={styles.logoBottomLine}>
              <Text style={{ fontSize: fontSize.base, color: colors.black }}>
                'Name'
              </Text>
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                  style={{ marginRight: freeSpace }}
                  onPress={() => {
                    // client.resetStore()
                    // navigation.toggleDrawer()
                    // Util.reload()
                    console.log('dd')
                    // RNRestart.Restart()
                  }}
                >
                  <Icon
                    style={{ width: 25, textAlign: 'center' }}
                    name="refresh"
                    size={23}
                    color={colors.black}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() =>
                    Alert.alert(
                      'Sign Out',
                      'Do you really want to sign out?',
                      [
                        {
                          text: 'No',
                          onPress: () => console.log('Cancel Pressed'),
                          style: 'cancel'
                        },
                        {
                          text: 'Yes',
                          onPress: async () => {
                            try {
                              await AsyncStorage.removeItem('@token')
                            } catch (error) {
                              console.log(error)
                            }
                            try {
                              await AsyncStorage.removeItem('@pushToken')
                            } catch (error) {
                              console.log(error)
                            }
                            try {
                              await AsyncStorage.removeItem('@info')
                            } catch (error) {
                              console.log(error)
                            }

                            // resetStore();
                            // navigation.navigate('Auth');
                            // RNRestart.Restart()
                          }
                        }
                      ]
                      // { cancelable: false }
                    )
                  }
                >
                  <Icon
                    style={{ width: 25, textAlign: 'center' }}
                    name="exit-to-app"
                    size={23}
                    color={colors.black}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>

        {/* menu */}
        <FlatList
          scrollEnabled={false}
          style={{
            backgroundColor: colors.white,
            paddingTop: freeSpace,
            paddingBottom: freeSpace
          }}
          data={menu}
          renderItem={({ item }) => (
            <View
              style={{
                height: 44,
                flexDirection: 'row',
                alignItems: 'center'
              }}
            >
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: freeSpace
                }}
                onPress={() => {
                  if (item.screen) navigation.navigate(item.screen)
                  if (item.domain) goToChat(item.domain)
                }}
              >
                <Icon
                  style={{ width: 25, textAlign: 'center' }}
                  name={item.icon}
                  size={20}
                  color={colors.secondary}
                />

                <Text
                  style={{
                    fontSize: fontSize.md,
                    marginLeft: 5,
                    color: colors.black
                  }}
                >
                  {item.key}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // backgroundColor: '#f6f6f6'
    paddingTop: 24
  },
  logo: {
    height: 170
  },
  logoBackground: {
    width: '100%',
    height: '100%'
  },
  logoImageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.6)'
  },
  logoImage: {
    width: 90,
    height: 90,
    marginLeft: 10
  },
  logoBottomLine: {
    padding: freeSpace,
    backgroundColor: `${colors.primary}99`,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  }
})

export default Drawer
