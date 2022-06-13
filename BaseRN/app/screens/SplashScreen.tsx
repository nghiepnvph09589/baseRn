import R from '@app/assets/R'
import FstImage from '@app/components/FstImage/FstImage'
import { dimensions } from '@app/theme'
import React from 'react'

const SplashScreen = () => {
  return (
    <FstImage
      source={R.images.img_splash}
      style={{
        width: dimensions.width,
        height: dimensions.height,
      }}
      resizeMode="cover"
    />
  )
}

export default SplashScreen
