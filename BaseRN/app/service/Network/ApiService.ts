import R from '@app/assets/R'
import { SCREEN_ROUTER_AUTH } from '@app/constant/Constant'
import NavigationUtil from '@app/Navigation/NavigationUtil'
import { showMessages } from '@app/utils/AlertHelper'
import AsyncStoreService from '../AsyncStorage/AsyncStorageService'
import { ResponseType } from './model/ApiResponse'
const BASE_URL_DEV = 'http://dev.asi358api.winds.vn/api/app/'

const createAPI = () => {
  const APIInstant = require('axios').default.create()
  APIInstant.defaults.baseURL = BASE_URL_DEV
  APIInstant.defaults.timeout = 20000
  APIInstant.defaults.headers = { 'Content-Type': 'application/json' }
  APIInstant.interceptors.request.use(async (config: any) => {
    config.headers.Authorization = (await AsyncStoreService.getToken()) || ''
    return config
  }, Promise.reject)

  APIInstant.interceptors.response.use(async (response: ResponseType<any>) => {
    const data = response.data
    if (data && data?.code === 401) {
      showMessages(R.strings().notification, R.strings().re_login)
      await AsyncStoreService.putToken('').then(() => {
        NavigationUtil.replace(SCREEN_ROUTER_AUTH.LOGIN)
      })
    } else if (data && data?.code === 403) {
      showMessages(
        R.strings().notification,
        data?.message ? data?.message : R.strings().re_login,
      )
      await AsyncStoreService.putToken('').then(() => {
        NavigationUtil.navigate(SCREEN_ROUTER_AUTH.LOGIN)
      })
    } else if (data && data.status !== 1)
      showMessages(R.strings().notification, data.message)
    return response
  })
  return APIInstant
}

const axiosClient = createAPI()

function handleResult<T>(api: any) {
  return api.then((res: any) => {
    return handleResponse<T>(res.data)
  })
}

function handleResponse<T>(data: ResponseType<T>) {
  if (data.status !== 1)
    return Promise.reject(new Error(data?.message || 'Co loi xay ra'))
  return Promise.resolve(data)
}

export const ApiClient = {
  get: (url: string, payload: object) =>
    handleResult(axiosClient.get(url, payload)),
  post: (url: string, payload: object) =>
    handleResult(axiosClient.post(url, payload)),
  put: (url: string, payload: object) =>
    handleResult(axiosClient.put(url, payload)),
  path: (url: string, payload: object) =>
    handleResult(axiosClient.patch(url, payload)),
  delete: (url: string, payload: object) =>
    handleResult(axiosClient.delete(url, { data: payload })),
}
