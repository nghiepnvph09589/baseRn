export const SCREEN_ROUTER_AUTH = {
  SPLASH: 'SPLASH',
  LOGIN: 'LOGIN',
}
export const SCREEN_ROUTER_APP = {
  SPLASH: 'SPLASH',
  HOME: 'HOME',
  MOVIE: 'MOVIE',
  NOTIFICATION: 'NOTIFICATION',
  ACCOUNT: 'ACCOUNT',
}
export const SCREEN_ROUTER = {
  SPLASH: 'SPLASH',
  AUTH: 'AUTH',
  MAIN: 'MAIN',
}
export const ROOT_STACK = {
  MAIN_APP: 'MAIN_APP',
}

export const MAIN_TAB = {
  HOME: 'HOME',
  MOVIE: 'MOVIE',
  ACCOUNT: 'ACCOUNT',
  NOTIFICATION: 'NOTIFICATION',
}

export const APP_SLICE = {
  SWITCH: 'switchNavigatorReducer',
  LIST_PROVINCE: 'listProvinceReducer',
}
const EMAIL_REGEX =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i
const PHONE_REGEX =
  /^(0|\+84)(\s|\.)?((3[2-9])|(5[689])|(7[06-9])|(8[1-689])|(9[0-46-9]))(\d)(\s|\.)?(\d{3})(\s|\.)?(\d{3})$/
