/* eslint-disable react/jsx-curly-newline */
import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity,
  Alert,
  AsyncStorage
} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { images } from '../constants/images'
import { colors, freeSpace, fontSize } from '../constants/theme'

const Drawer = () => {
  return (
    <View style={styles.main}>
      <ScrollView>
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
                  <MaterialIcons
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
                  <MaterialIcons
                    name="exit-to-app"
                    size={23}
                    color={colors.black}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#f6f6f6'
    // paddingTop: 24
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
