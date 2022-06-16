import { SCREEN_ROUTER_AUTH } from '@app/constant/Constant'
import LoginScreen from '@app/screens/screens/Auth/LoginScreen'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
const { LOGIN } = SCREEN_ROUTER_AUTH

const authScreen = {
  [LOGIN]: LoginScreen,
}
const Stack = createStackNavigator()
export const StackAuthScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}
    >
      {Object.keys(authScreen).map((item, index) => (
        <Stack.Screen key={index} name={item} component={authScreen[item]} />
      ))}
    </Stack.Navigator>
  )
}
