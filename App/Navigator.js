// @flow

import { TabNavigator } from 'react-navigation'
import FirstTabScreen from './Screens/FirstTab'
import SecondTabScreen from './Screens/SecondTab'

const AppNavigator = TabNavigator(
  {
    First: {
      screen: FirstTabScreen
    },
    Second: {
      screen: SecondTabScreen
    }
  },
  {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#e91e63'
    }
  }
)

export default AppNavigator
