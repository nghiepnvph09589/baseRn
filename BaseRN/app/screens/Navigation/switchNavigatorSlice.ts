import { SCREEN_ROUTER } from '@app/constant/Constant'
import { createSlice } from '@reduxjs/toolkit'

const switchNavigatorSlice: any = createSlice({
  name: 'switchNavigatorReducer',
  initialState: {
    switch: SCREEN_ROUTER.SPLASH,
  },
  reducers: {
    navigateSwitch: (state, action) => {
      state.switch = action.payload
    },
  },
})

export const { navigateSwitch } = switchNavigatorSlice.actions
export default switchNavigatorSlice.reducer
