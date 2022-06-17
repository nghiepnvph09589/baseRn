import { Dimensions } from 'react-native'

import R from '@app/assets/R'
import { moderateScale } from '@common'

export const { height, width } = Dimensions.get('window')

export const fonts = {
  regular9: {
    fontSize: moderateScale(9),
    fontFamily: R.fonts.sf_regular,
  },
  regular10: {
    fontSize: moderateScale(10),
    fontFamily: R.fonts.sf_regular,
  },
  regular11: {
    fontSize: moderateScale(11),
    fontFamily: R.fonts.sf_regular,
  },
  regular12: {
    fontSize: moderateScale(12),
    fontFamily: R.fonts.sf_regular,
  },
  regular13: {
    fontSize: moderateScale(13),
    fontFamily: R.fonts.sf_regular,
  },
  regular14: {
    fontSize: moderateScale(14),
    fontFamily: R.fonts.sf_regular,
  },
  regular15: {
    fontSize: moderateScale(15),
    fontFamily: R.fonts.sf_regular,
  },
  regular16: {
    fontSize: moderateScale(16),
    fontFamily: R.fonts.sf_regular,
  },
  regular17: {
    fontSize: moderateScale(17),
    fontFamily: R.fonts.sf_regular,
  },
  regular18: {
    fontSize: moderateScale(18),
    fontFamily: R.fonts.sf_regular,
  },
  regular20: {
    fontSize: moderateScale(20),
    fontFamily: R.fonts.sf_regular,
  },
  regular24: {
    fontSize: moderateScale(24),
    fontFamily: R.fonts.sf_regular,
  },

  regular28: {
    fontSize: moderateScale(28),
    fontFamily: R.fonts.sf_regular,
  },
  regular34: {
    fontSize: moderateScale(34),
    fontFamily: R.fonts.sf_regular,
  },
  regular38: {
    fontSize: moderateScale(38),
    fontFamily: R.fonts.sf_regular,
  },
  regular54: {
    fontSize: moderateScale(54),
    fontFamily: R.fonts.sf_regular,
  },
}
