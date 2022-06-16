import R from '@app/assets/R'
import { Alert } from 'react-native'

export const showConfirm = (
  title: string,
  content: string,
  action?: () => void,
  textCancel?: string,
  textConfirm?: string,
) => {
  Alert.alert(
    title,
    content,
    [
      {
        text: textCancel || R.strings().cancel,
        style: 'cancel',
      },
      {
        text: textConfirm || R.strings().confirm,
        onPress: action,
      },
    ],
    { cancelable: false },
  )
}

export const showMessages = (
  title: string,
  content: string,
  action?: () => void,
) => {
  setTimeout(() => {
    Alert.alert(
      title,
      content,
      [
        {
          text: 'OK',
          onPress: action,
        },
      ],
      { cancelable: false },
    )
  }, 100)
}
