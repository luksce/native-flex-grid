import React from 'react';
import { StyleSheet, Text, TextInput, View, SafeAreaView, TouchableHighlight, Dimensions } from 'react-native';

export default props => {

  const stylesBtn = [styles.btn]
    if(props.duplo){
      stylesBtn.push(styles.btnFirstLine)
    }
    if(props.operation){
      stylesBtn.push(styles.btnOper)
    }
    if(props.ac){
      stylesBtn.push(styles.btnAC)
    }
    if(props.zero){
      stylesBtn.push(styles.btnZero)
    }
  return(
    <TouchableHighlight onPress={props.aoClicar}>
      <Text style={stylesBtn}>{props.label}</Text>
    </TouchableHighlight>
  );
    
}

const styles = StyleSheet.create({
   btn:{
     fontSize: 30,
     height: Dimensions.get('window').width/4,
     width: Dimensions.get('window').width/4,
     padding: 20,
     backgroundColor: "#f0f0f0",
     color: '#000',
     borderWidth: 1,
     borderColor: '#777',
     textAlign: 'center'
   },
   btnOper: {
     color: '#fff',
     backgroundColor: '#fa8231'
   },
   btnAC:{
     width: (Dimensions.get('window').width/4)*3,
   },
   btnZero:{
     width: (Dimensions.get('window').width/4)*2,
   },

})