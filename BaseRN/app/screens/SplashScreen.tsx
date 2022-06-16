import R from '@app/assets/R'
import FstImage from '@app/components/FstImage/FstImage'
import { SCREEN_ROUTER } from '@app/constant/Constant'
import { dimensions } from '@app/theme'
import React, { useEffect } from 'react'
import splashScreen from 'react-native-splash-screen'
import { useDispatch } from 'react-redux'
import { navigateSwitch } from './Navigation/switchNavigatorSlice'

const SplashScreen = () => {
  const Dispatch = useDispatch()
  useEffect(() => {
    splashScreen.hide()

    Dispatch(navigateSwitch(SCREEN_ROUTER.AUTH))
  }, [Dispatch])
  return (
    <FstImage
      source={R.images.img_splash}
      style={{
        width: dimensions.width,
        height: dimensions.height / 2,
      }}
      resizeMode="cover"
    />
  )
}

export default SplashScreen
