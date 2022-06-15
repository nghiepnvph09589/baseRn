import ScreenWrapper from '@app/components/ScreenWrapper'
import React from 'react'
import { Text, View } from 'react-native'

const LoginScreen = () => {
  return (
    <ScreenWrapper titleHeader="Đăng nhập">
      <View style={{ flex: 1 }}>
        <Text children={'Đăng nhập'} />
      </View>
    </ScreenWrapper>
  )
}

export default LoginScreen
