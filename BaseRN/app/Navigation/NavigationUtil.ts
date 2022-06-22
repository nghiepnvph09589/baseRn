import {
  CommonActions,
  StackActionType,
  StackActions,
} from '@react-navigation/core'

let _navigator: {
  dispatch: (arg0: CommonActions.Action | StackActionType) => void
}

function setTopLevelNavigator(navigatorRef: any) {
  _navigator = navigatorRef
}
function navigateWithKey(name: string, params?: any, key?: string) {
  if (_navigator)
    _navigator.dispatch(CommonActions.navigate({ name, params, key }))
}
function navigate(name: string, params?: object | undefined) {
  if (_navigator) _navigator.dispatch(CommonActions.navigate(name, params))
}
function replace(name: string, params?: object | undefined) {
  if (_navigator) _navigator.dispatch(StackActions.replace(name, params))
}
function push(name: string, params?: object | undefined) {
  if (_navigator) _navigator.dispatch(StackActions.push(name, params))
}
function goBack() {
  if (_navigator) _navigator.dispatch(CommonActions.goBack())
}
function pop(count: number) {
  if (_navigator) _navigator.dispatch(StackActions.pop(count || 1))
}
function dismiss() {
  if (_navigator) {
    _navigator.dispatch(StackActions.popToTop())
    goBack()
  }
}

export default {
  dismiss,
  navigate,
  navigateWithKey,
  setTopLevelNavigator,
  goBack,
  push,
  replace,
  pop,
}
