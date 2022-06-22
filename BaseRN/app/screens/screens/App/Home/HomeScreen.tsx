import R from '@app/assets/R'
import FstImage from '@app/components/FstImage/FstImage'
import { colors } from '@app/theme'
import React, { useState } from 'react'
import { Animated, Image, StyleSheet, View } from 'react-native'
import FastImage from 'react-native-fast-image'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

const styles = StyleSheet.create({
  iconContainer: {
    height: 70,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: colors.primary,
  },
})

const HomeScreen = () => {
  const [status, setStatus] = useState<boolean>(false)
  const animatedButtonScale = new Animated.Value(1)

  const onPressIn = () => {
    Animated.spring(animatedButtonScale, {
      toValue: 1.5,
      useNativeDriver: true,
    }).start()
  }

  const onPressOut = () => {
    Animated.spring(animatedButtonScale, {
      toValue: 1,
      useNativeDriver: true,
    }).start()
  }

  // The animated style for scaling the button within the Animated.View
  const animatedScaleStyle = {
    transform: [{ scale: animatedButtonScale }],
  }

  return (
    <View>
      <TouchableWithoutFeedback
        onPress={() => {
          setStatus(!status)
        }}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        style={{
          marginTop: 100,
          marginLeft: 50,
          width: 70,
          height: 65,
          borderRadius: 40,
          backgroundColor: 'white',
        }}
      >
        <Animated.View style={[styles.iconContainer, animatedScaleStyle]}>
          <FstImage
            tinColor={status ? '#E84343' : '#CED4DA'}
            style={{ width: 40, height: 40 }}
            source={R.images.ic_tym}
          />
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  )
}

export default HomeScreen
