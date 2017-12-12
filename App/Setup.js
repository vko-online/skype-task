// @flow
import React, { PureComponent } from 'react'
import store from './Store'
import Application from './Application'
import AppNavigator from './Navigator'
const { Provider } = require('react-redux')

export default function setup () {
  class Root extends PureComponent<any, any> {
    render () {
      return (
        <Provider store={store}>
          <Application />
        </Provider>
      )
    }
  }

  return Root
}
