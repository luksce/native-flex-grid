import React from 'react';
import { StyleSheet, Text, TextInput, View, SafeAreaView, Button, ColorPropType } from 'react-native';

export default props => {
  return(
    <View style={styles.display}>
        <Text 
          style={styles.textDisOp} 
          numberOfLines={1}
        >{props.value}</Text>
        <Text 
          style={styles.textDisRes} 
          numberOfLines={2}
        >{props.res}</Text>
  </View>
  );
    
}

const styles = StyleSheet.create({
   display: {
     flex: 1,
     padding: 20,
     justifyContent: 'center',
     alignItems: 'flex-end',
     backgroundColor: '#646464',
     width: '100%'
   },
   textDisRes:{
      fontSize: 50,
      color: '#fff' 
   },
   textDisOp:{
    fontSize: 25,
    color: '#fff' 
 }
})