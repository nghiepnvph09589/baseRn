import store from './app/store'
import React, { Component } from 'react'
import codePush from 'react-native-code-push'
import { Provider } from 'react-redux'
import AppContainer from './AppContainer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}

let codePushOptions = {}
// const MyApp = codePush(codePushOptions)(App)

export default App
