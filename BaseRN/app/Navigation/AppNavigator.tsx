import SplashScreen from '../screens/SplashScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React, { memo } from 'react'
import isEqual from 'react-fast-compare'
import { connect } from 'react-redux'
import NavigationUtil from './NavigationUtil'
import { APP_SLICE, ROOT_STACK, SCREEN_ROUTER } from '@app/constant/Constant'
import { StackAuthScreen } from './stack/Auth'
import { StackAppScreen } from './stack/StackApp'
import { StackMainScreen } from './stack/BottomTabBar'

const RootStack = createStackNavigator()

const renderSwitch = (switchApp: string) => {
  switch (switchApp) {
    case SCREEN_ROUTER.SPLASH:
      return (
        <RootStack.Screen
          name={SCREEN_ROUTER.SPLASH}
          component={SplashScreen}
        />
      )
    case SCREEN_ROUTER.AUTH:
      return (
        <RootStack.Screen
          name={SCREEN_ROUTER.AUTH}
          component={StackAuthScreen}
        />
      )
    case SCREEN_ROUTER.MAIN:
      return (
        <>
          <RootStack.Screen
            name={SCREEN_ROUTER.MAIN}
            component={StackMainScreen}
          />
          {StackAppScreen()}
        </>
      )
    default:
      break
  }
}

const AppNavigatorComponent = (props: { switch: string }) => {
  return (
    <NavigationContainer
      ref={navigatorRef => {
        NavigationUtil.setTopLevelNavigator(navigatorRef)
      }}
    >
      <RootStack.Navigator
        screenOptions={() => ({
          headerShown: false,
        })}
        initialRouteName={ROOT_STACK.MAIN_APP}
        children={<>{renderSwitch(props?.switch)}</>}
      />
    </NavigationContainer>
  )
}

const AppNavigator = memo(AppNavigatorComponent, isEqual)
const mapStateToProps = (state: { [x: string]: { switch: string } }) => ({
  switch: state[APP_SLICE.SWITCH].switch,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigator)
