import { SCREEN_ROUTER_APP } from '@app/constant/Constant'
import AccountScreen from '@app/screens/screens/App/Account/AccountScreen'
import HomeScreen from '@app/screens/screens/App/Home/HomeScreen'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

const { NOTIFICATION, HOME, MOVIE, ACCOUNT } = SCREEN_ROUTER_APP
const Stack = createStackNavigator()

const mainScreen = {
  [HOME]: HomeScreen,
  // [HOME]: UpdateAccountScreen,
  // [MOVIE]: ListSupportScreen,
  [ACCOUNT]: AccountScreen,
}

export const StackAppScreen = () => {
  return (
    <>
      {Object.keys(mainScreen).map((item, index) => (
        <Stack.Screen key={index} name={item} component={mainScreen[item]} />
      ))}
    </>
  )
}
