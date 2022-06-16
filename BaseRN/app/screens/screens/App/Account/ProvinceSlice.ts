import { APP_SLICE } from '@app/constant/Constant'
import { ApiClient } from '@app/service/Network/ApiService'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
export const requestListProvince = (payload?: any) =>
  ApiClient.get('Address/GetListProvince', payload)
const initState: any = {
  isLoading: true,
  isError: false,
  data: [],
  isLoadMore: false,
  isLastPage: false,
}
export const getListProvince: any = createAsyncThunk(
  APP_SLICE.LIST_PROVINCE,
  async (payload?: any) => {
    const response = await requestListProvince(payload)
    return response.data
  },
)

const ProvinceSlice = createSlice({
  name: APP_SLICE.LIST_PROVINCE,
  initialState: initState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getListProvince.pending, state => {
      state.isError = false
      state.isLoading = true
    })
    builder.addCase(getListProvince.fulfilled, (state, action) => {
      state.isLoading = false
      state.isError = false
      state.isLoadMore = false
      state.data = action.payload
    })
    builder.addCase(getListProvince.rejected, state => {
      // state.error = true
      state.isLoading = false
      state.isLoadMore = false
    })
  },
})
export const selectCount = (state: any) => state.account
export default ProvinceSlice.reducer
