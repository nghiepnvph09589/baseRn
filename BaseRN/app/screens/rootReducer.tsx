import SwitchNavigatorSlice from '@app/Navigation/switchNavigatorSlice'
import ProvinceReducer from '@app/screens/screens/App/Account/ProvinceSlice'
const rootReducer = {
  switchNavigatorReducer: SwitchNavigatorSlice,
  provinceReducer: ProvinceReducer,
}

export default rootReducer
