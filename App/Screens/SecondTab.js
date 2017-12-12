// @flow

import React, { PureComponent } from 'react'
import { View, Text, Button } from 'react-native'

class SecondTabScreen extends PureComponent<any, any> {
  static navigationOptions = {
    tabBarLabel: 'Second'
  };

  handlePress = () => {
    this.props.navigation.navigate('First')
  };

  render () {
    return (
      <View>
        <Text>First tab</Text>
        <Button title='Go to first tab' onPress={this.handlePress} />
      </View>
    )
  }
}

export default SecondTabScreen
