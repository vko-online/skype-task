// @flow
import React, { PureComponent } from 'react'
import store from './Store'
const Application = require('./App')
const { Provider } = require('react-redux')

function setup () {
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

global.LOG = (...args) => {
  console.log('/------------------------------\\')
  console.log(...args)
  console.log('\\------------------------------/')
  return args[args.length - 1]
}

module.exports = setup
