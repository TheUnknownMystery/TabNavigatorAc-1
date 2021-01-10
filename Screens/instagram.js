import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Header from '../components/Header'

export default class Instagram extends React.Component{
 render() {
  return (

  <View>
  <TouchableOpacity>
  <Text style = {styles.textStyle}>Instagram</Text>
  </TouchableOpacity>

  </View>
 
  )
 }
}

const styles= StyleSheet.create({

textStyle:{

fontWeight: 'bold',
fontSize: 60,
marginTop:200,
color: 'orange',
alignSelf: 'center',
alignItems: 'center',
justifyContent: 'center'
}

})