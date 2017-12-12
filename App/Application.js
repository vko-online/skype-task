// @flow

import React, { PureComponent } from 'react'
import { AppState, StyleSheet, StatusBar, View } from 'react-native'
import AppNavigator from './Navigator'
import { setInterval } from 'core-js/library/web/timers'
const { loadData } = require('./Actions')
const { connect } = require('react-redux')

class Application extends PureComponent<any, any> {
  intervalId = null
  componentDidMount = () => {
    AppState.addEventListener('change', this.handleAppStateChange)
    this.load()
    this.intervalId = setInterval(this.load, 5000)
  }

  componentWillUnmount = () => {
    AppState.removeEventListener('change', this.handleAppStateChange)
  }

  load = () => {
    this.props.dispatch(loadData())
  }

  handleAppStateChange = appState => {
    if (appState === 'active') {
      this.load()
    } else {
      clearInterval(this.intervalId)
    }
  };

  render () {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='black' translucent />
        <AppNavigator />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
})

export default connect()(Application)
