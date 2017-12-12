// @flow

import React, { PureComponent } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

class SecondTabScreen extends PureComponent<any, any> {
  static navigationOptions = {
    tabBarLabel: 'Second'
  };

  handlePress = () => {
    this.props.navigation.navigate('First')
  };

  render () {
    return (
      <View style={styles.container}>
        <Text>Second tab</Text>
        <Button title='Go to first tab' onPress={this.handlePress} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 44
  }
})

export default SecondTabScreen
