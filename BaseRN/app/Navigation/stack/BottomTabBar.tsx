import R from '@app/assets/R'
import { MAIN_TAB, SCREEN_ROUTER } from '@app/constant/Constant'
import AccountScreen from '@app/screens/screens/App/Account/AccountScreen'
import HomeScreen from '@app/screens/screens/App/Home/HomeScreen'
import { colors } from '@app/theme'
import { showConfirm } from '@app/utils/AlertHelper'
import AsyncStorage from '@react-native-community/async-storage'
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import FastImage from 'react-native-fast-image'
import { getBottomSpace, isIphoneX } from 'react-native-iphone-x-helper'
import { useDispatch } from 'react-redux'
import reactotron from 'reactotron-react-native'
import { navigateSwitch } from '../switchNavigatorSlice'
import TabBarIcon from './component/TabBarIcon'
import TabBarButton from './component/TabBarIcon'
import TabBarLabel from './component/TabBarLabel'
const { HOME, ACCOUNT } = MAIN_TAB
const { ic_home, ic_account } = R.images

const tabBarLabel = {
  [HOME]: 'Trang chủ',
  [ACCOUNT]: 'Tài khoản',
}
const mainTab = {
  [HOME]: HomeScreen,
  [ACCOUNT]: AccountScreen,
}
const MAIN = {
  [SCREEN_ROUTER.MAIN]: mainTab,
}
const tabBarIcon = {
  [HOME]: ic_home,
  [ACCOUNT]: ic_account,
}
const TabBarNameRequireLogin = [ACCOUNT]

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()
const MainTab = (route: { route: { name: string; key: string } }) => {
  const dispatch = useDispatch()
  // const routeName = getFocusedRouteNameFromRoute(route)
  reactotron.log!('routeName', route)
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarLabel: ({ focused }) => (
          <TabBarLabel focused={focused} label={tabBarLabel[route.name]} />
        ),
        tabBarIcon: ({ focused }) => (
          <TabBarIcon source={tabBarIcon[route.name]} focused={focused} />
        ),
        tabBarButton: props => {
          return (
            <TouchableOpacity
              {...props}
              onPress={async e => {
                const token = await AsyncStorage.getItem('token')
                if (TabBarNameRequireLogin.includes(route.name) && !token) {
                  showConfirm(
                    R.strings().notification,
                    'Vui lòng đăng nhập',
                    () => {
                      dispatch(navigateSwitch(SCREEN_ROUTER.AUTH))
                    },
                  )
                  return
                }
                if (props.onPress) props.onPress(e)
              }}
            />
          )
        },
      })}
      tabBar={props => <BottomTabBar {...props} />}
    >
      {Object.keys(MAIN[route.route?.name]).map((item, index) => (
        <Tab.Screen
          options={() => ({
            headerShown: false,
          })}
          key={index}
          name={item}
          component={MAIN[route.route?.name][item]}
        />
      ))}
    </Tab.Navigator>
  )
}
export const StackMainScreen = () => (
  <Stack.Navigator
    screenOptions={() => ({
      headerShown: false,
    })}
    children={
      <>
        <Stack.Screen name={SCREEN_ROUTER.MAIN} component={MainTab} />
      </>
    }
  />
)
