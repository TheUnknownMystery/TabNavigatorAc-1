import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Header from '../components/Header'
export default class FaceBook extends React.Component {
 render() {
  return (

   <View>
    <Header/>
    <TouchableOpacity>

      <Text style = {styles.textStyle}>FaceBook</Text>

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
color: 'blue',
alignSelf: 'center',
alignItems: 'center',
justifyContent: 'center'
}

})
