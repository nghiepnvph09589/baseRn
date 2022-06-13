import React, { useMemo } from 'react'
import {
  ActivityIndicator,
  Image,
  ImageStyle,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native'

import R from '@app/assets/R'
import { colors } from '@app/theme'
import FastImage from 'react-native-fast-image'
import { useImmer } from 'use-immer'
import { Block } from '../Block/Block'
import { ImageProps } from './FstImage.props'

type ImageState = {
  loaded: boolean
  waiting: boolean
  failed: boolean
  loading: boolean
}

const MyFstImage: React.FC<ImageProps> = (props: ImageProps) => {
  const [imageState, setImageState] = useImmer<ImageState>({
    loaded: false,
    waiting: true,
    failed: false,
    loading: false,
  })
  // const [reloadKey, useReloadKey] = useState(new Date().getTime().toString())
  const reloadImage = () => {
    // useReloadKey(new Date().getTime().toString())
  }
  const {
    style: styleOverride = {},
    resizeMode = 'cover',
    containerStyle,
    tinColor,
  } = props
  var { source, defaultSource } = props
  const style: StyleProp<ImageStyle> | any = useMemo(
    () => styleOverride,
    [styleOverride],
  )
  const imageSource = React.useMemo(() => {
    if (typeof source === 'object') {
      return source.uri
        ? {
            ...source,
            priority: FastImage.priority.high,
            uri: source.uri,
          }
        : defaultSource || R.images.ic_logo
    }
    return source
  }, [source, defaultSource])

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setImageState((draft: any) => {
        draft.waiting = false
      })
    }, 200)
    return () => {
      clearTimeout(timeout)
    }
  }, [setImageState])

  React.useEffect(() => {
    if (!imageState.waiting && !imageState.loaded) {
      const loadStart = () => {
        setImageState((draft: any) => {
          draft.failed = false
          draft.loading = true
        })
      }
      loadStart()
    }
  }, [imageState.waiting, imageState.loaded, setImageState])

  const handleLoadEnd = React.useCallback(() => {
    setImageState((draft: any) => {
      draft.failed = false
      draft.loaded = true
      draft.loading = false
    })
  }, [setImageState])
  const handleError = React.useCallback(() => {
    setImageState((draft: any) => {
      draft.failed = true
      draft.loading = false
    })
  }, [setImageState])
  return (
    <Block style={containerStyle}>
      <FastImage
        {...props}
        style={style}
        resizeMode={resizeMode}
        onLoadEnd={handleLoadEnd}
        onError={handleError}
        source={imageSource}
        tintColor={tinColor}
      >
        {imageState.loading ? (
          <View style={styles.containerLoading}>
            <ActivityIndicator color={colors.primary} style={styles.flex} />
          </View>
        ) : imageState.failed ? (
          <TouchableOpacity
            style={styles.containerReload}
            // onPress={reloadImage}
          >
            <Image
              style={styles.imageRetry}
              source={R.images.ic_404_error}
              resizeMode="contain"
            />
          </TouchableOpacity>
        ) : (
          props.children
        )}
      </FastImage>
    </Block>
  )
}

const FstImage = React.memo(MyFstImage)
export default FstImage

const styles = StyleSheet.create({
  containerLoading: {
    backgroundColor: 'transparent',
    flex: 1,
    overflow: 'hidden',
  },
  containerReload: {
    flex: 1,
    justifyContent: 'center',
  },
  flex: {
    flex: 1,
  },
  imageRetry: {
    alignSelf: 'center',
  },
})
