import ScreenWrapper from '@app/components/ScreenWrapper'
import React from 'react'
import { Text, View } from 'react-native'

const AccountScreen = () => {
  return (
    <ScreenWrapper titleHeader="Account">
      <View style={{ flex: 1 }}>
        <Text children={'Account'} />
      </View>
    </ScreenWrapper>
  )
}

export default AccountScreen
