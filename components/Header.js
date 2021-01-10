import * as React from 'react';
import { View,StyleSheet,Text } from 'react-native';

 class Header extends React.Component {
 render() {
  return (
   <View style ={{justifyContent: 'center'}}>

    <Text style={styles.HeaderStyle}>BuzzApp</Text>

   </View>
  )
 }
}


const styles = StyleSheet.create({

 HeaderStyle: {

  fontWeight: "bold",
  backgroundColor: 'blue',
  fontSize: 30,
  justifyContent: 'center',
  color: 'black'
 },
})

export default Header;