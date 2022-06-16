import ScreenWrapper from '@app/components/ScreenWrapper'
import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { getListProvince } from '../Account/ProvinceSlice'

const HomeScreen = () => {
  const dispatch = useDispatch()
  const getData = async () => {
    try {
      dispatch(getListProvince({ params: { isArea: 1 } }))
    } catch (e) {}
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <ScreenWrapper titleHeader="Home">
      <View style={{ flex: 1 }}>
        <Text children={'Home'} />
      </View>
    </ScreenWrapper>
  )
}

export default HomeScreen
