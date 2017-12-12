// @flow

import type { DataState } from '../Reducers'

import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { connect } from 'react-redux'

type Props = {
  data: DataState
};

class FirstTabScreen extends PureComponent<Props, any> {
  props: Props;
  static navigationOptions = {
    tabBarLabel: 'First'
  };

  handlePress = () => {
    this.props.navigation.navigate('Second')
  };

  renderItem = ({ item, index }) => {
    const bgStyle = {
      padding: 10,
      borderRadius: 3,
      fontFamily: 'Avenir Next',
      backgroundColor: colorForBackground(this.props.data.length, index)
    }
    return (
      <View style={styles.row}>
        <Text style={bgStyle}>{item.name}</Text>
        <View style={styles.rowValues}>
          <Text>highest bid: {item.highestBid}</Text>
          <Text>percent change: {item.percentChange}</Text>
        </View>
      </View>
    )
  };

  render () {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.data}
          keyExtractor={item => item.name}
          renderItem={this.renderItem} />
      </View>
    )
  }
}

function colorForBackground (count: number, index: number): string {
  const hue = Math.round(360 * index / (count + 1))
  return `hsl(${hue}, 74%, 65%)`
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: 44
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  rowValues: {
    marginLeft: 10,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  }
})

function select (store) {
  return {
    data: store.data
  }
}

export default connect(select)(FirstTabScreen)
