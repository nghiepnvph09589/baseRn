import R from '@app/assets/R'
import FstImage from '@app/components/FstImage/FstImage'
import { SCREEN_ROUTER } from '@app/constant/Constant'
import { dimensions } from '@app/theme'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'
import { navigateSwitch } from './Navigation/switchNavigatorSlice'

const SplashScreen = () => {
  const Dispatch = useDispatch()
  return (
    <TouchableOpacity
      onPress={() => {
        Dispatch(navigateSwitch(SCREEN_ROUTER.AUTH))
      }}
    >
      <FstImage
        source={R.images.img_splash}
        style={{
          width: dimensions.width,
          height: dimensions.height,
        }}
        resizeMode="cover"
      />
    </TouchableOpacity>
  )
}

export default SplashScreen
