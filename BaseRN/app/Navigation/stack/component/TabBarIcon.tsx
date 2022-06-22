import { colors } from '@app/theme'
import React from 'react'
import FastImage, { Source } from 'react-native-fast-image'

const TabBarIcon = ({
  source,
  focused,
}: {
  source: Source
  focused?: boolean
}) => {
  const sizeIcon = focused ? 30 : 25
  return (
    <FastImage
      style={{
        width: sizeIcon,
        height: sizeIcon,
      }}
      tintColor={focused ? colors.primary : '#868E96'}
      source={source}
      resizeMode={'contain'}
    />
  )
}

export default TabBarIcon
