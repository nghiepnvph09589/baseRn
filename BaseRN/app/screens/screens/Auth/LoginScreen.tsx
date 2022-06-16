import ScreenWrapper from '@app/components/ScreenWrapper'
import { SCREEN_ROUTER } from '@app/constant/Constant'
import { navigateSwitch } from '@app/Navigation/switchNavigatorSlice'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useDispatch } from 'react-redux'

const LoginScreen = () => {
  const dispatch = useDispatch()
  return (
    <ScreenWrapper titleHeader="Đăng nhập">
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          onPress={() => {
            dispatch(navigateSwitch(SCREEN_ROUTER.MAIN))
          }}
        >
          <Text children={'Đăng nhập'} />
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  )
}

export default LoginScreen
