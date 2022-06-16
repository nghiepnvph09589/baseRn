import { colors } from '@app/theme'
import React from 'react'
import { Text } from 'react-native'

const TabBarLabel = ({
  focused,
  label,
}: {
  focused: boolean
  label: string
}) => {
  const color = focused ? colors.primary : '#868E96'
  return (
    <Text
      style={{
        color: color,
      }}
      numberOfLines={1}
      children={label}
    />
  )
}

export default TabBarLabel
