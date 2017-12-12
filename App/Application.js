// @flow

import React, { PureComponent } from 'react'
import { AppState, StyleSheet, StatusBar, View } from 'react-native'
import AppNavigator from './Navigator'
const { loadData } = require('./Actions')
const { connect } = require('react-redux')

class Application extends PureComponent<any, any> {
  componentDidMount () {
    AppState.addEventListener('change', this.handleAppStateChange)
    this.props.dispatch(loadData())
  }

  componentWillUnmount () {
    AppState.removeEventListener('change', this.handleAppStateChange)
  }

  handleAppStateChange = appState => {
    if (appState === 'active') {
      this.props.dispatch(loadData())
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
