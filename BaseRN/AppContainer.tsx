import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import AppNavigator from './app/screens/Navigation/AppNavigator'

const AppContainer = () => {
  return (
    <SafeAreaProvider>
      <AppNavigator />
    </SafeAreaProvider>
  )
}

export default AppContainer
