import ScreenWrapper from '@app/components/ScreenWrapper'
import { fonts } from '@app/theme'
import React, { useCallback, useEffect } from 'react'
import { Text, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { getListProvince } from '../Account/ProvinceSlice'

const HomeScreen = () => {
  const dispatch = useDispatch()
  const getData = useCallback(async () => {
    try {
      dispatch(getListProvince({ params: { isArea: 1 } }))
    } catch (e) {}
  }, [dispatch])
  useEffect(() => {
    getData()
  }, [getData])
  return (
    <ScreenWrapper titleHeader="Home">
      <View style={{ flex: 1 }}>
        <Text style={{ ...fonts.regular15 }} children={'Home'} />
      </View>
    </ScreenWrapper>
  )
}

export default HomeScreen
