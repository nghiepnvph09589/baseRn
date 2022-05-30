import { SCREEN_ROUTER } from '@app/constant/Constant'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const switchNavigatorSlice = createSlice({
  name: 'switchNavigatorReducer',
  initialState: {
    switch: SCREEN_ROUTER.SPLASH,
  },
  reducers: {
    navigateSwitch: (state, action: PayloadAction<string>) => {
      state.switch = action.payload
    },
  },
})

export const { navigateSwitch } = switchNavigatorSlice.actions
export default switchNavigatorSlice.reducer
