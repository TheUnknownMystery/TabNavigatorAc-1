import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Header from './components/Header'
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import Instagram from './Screens/instagram'
import FaceBook from './Screens/FaceBook'

const BottomTab = createBottomTabNavigator({

facebook:  {screen: FaceBook},
instagram: {screen: Instagram}

})

const AppContainer = createAppContainer(BottomTab)

export default class App extends React.Component {
  render() {
    return (

      <AppContainer/>


    )
  }
}

