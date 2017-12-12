// @flow

import React, { PureComponent } from 'react'
import { View, Text, Button } from 'react-native'

class FirstTabScreen extends PureComponent<any, any> {
  static navigationOptions = {
    tabBarLabel: 'First'
  };

  handlePress = () => {
    this.props.navigation.navigate('Second')
  };

  render () {
    return (
      <View>
        <Text>First tab</Text>
        <Button title='Go to second tab' onPress={this.handlePress} />
      </View>
    )
  }
}

export default FirstTabScreen
