import ScreenWrapper from '@app/components/ScreenWrapper'
import React from 'react'
import { Text, View } from 'react-native'

const HomeScreen = () => {
  return (
    <ScreenWrapper titleHeader="Home">
      <View style={{ flex: 1 }}>
        <Text children={'Home'} />
      </View>
    </ScreenWrapper>
  )
}

export default HomeScreen
