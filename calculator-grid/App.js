import React , {useState} from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import Display from './components/Display';
import Btn from './components/Button';
import { Grid, Row } from 'react-native-easy-grid';


let estados = {
  valueScreen: '',
  result: 0,
  operate: false,
  point: false
}
export default function App() {
  const [valScreen, setvalScreen] = useState(estados.valueScreen);
  const [valRes,setValResultado] = useState(estados.result);

  const addDigit = (d) => {
    if(d == '+' || d == '-' || d == '/' || d == '*'){
      estados.point = false;
    }
    if(d == '.' && !estados.point){
      estados.point = true
      estados.operate = false
    }else if(d == '.' && estados.point){
      return
    }
    if((d == '+' || d == '-' || d == '/' || d == '*') && estados.operate){
      estados.valueScreen = estados.result;
      estados.result = 0 ;
    }
    estados.valueScreen = estados.valueScreen + d;
    setvalScreen(estados.valueScreen);
    setValResultado(estados.result);
    estados.operate = false; 
  }

  const Clear = () => {
    estados = {
      valueScreen: '',
      result: 0,
      operate: false,
      point: false
    }

    setvalScreen(estados.valueScreen);
    setValResultado(estados.result);
  }

  const operation = (o) => {
    if(o == 'AC'){
      Clear();
      return
    }
    try{
      estados.result = eval(estados.valueScreen)
      estados.operate = true
      setValResultado(estados.result)
    }catch{
      estados.result = 'Erro'
      estados.operate = true
      setValResultado(estados.result)
    }
  }
  return (
      <Grid>
        <SafeAreaView style={styles.container}>
        <Row size={2}>   
          <Display value={valScreen} res={valRes}/>
        </Row>
        <Row size={3}>
          <View style={styles.btns}>
            <Btn label="AC" ac aoClicar={()=>{operation('AC')}}></Btn>
            <Btn label="/" operation aoClicar={()=>{addDigit('/')}}></Btn>
            <Btn label="7" aoClicar={()=>{addDigit('7')}}></Btn>
            <Btn label="8" aoClicar={()=>{addDigit('8')}}></Btn>
            <Btn label="9" aoClicar={()=>{addDigit('9')}}></Btn>
            <Btn label="*" operation aoClicar={()=>{addDigit('*')}}></Btn>
            <Btn label="4" aoClicar={()=>{addDigit('4')}}></Btn>
            <Btn label="5" aoClicar={()=>{addDigit('5')}}></Btn>
            <Btn label="6" aoClicar={()=>{addDigit('6')}}></Btn>
            <Btn label="-" operation aoClicar={()=>{addDigit('-')}}></Btn>
            <Btn label="1" aoClicar={()=>{addDigit('1')}}></Btn>
            <Btn label="2" aoClicar={()=>{addDigit('2')}}></Btn>
            <Btn label="3" aoClicar={()=>{addDigit('3')}}></Btn>
            <Btn label="+" operation aoClicar={()=>{addDigit('+')}}></Btn>
            <Btn label="0" zero aoClicar={()=>{addDigit('0')}}></Btn>
            <Btn label="." aoClicar={()=>{addDigit('.')}}></Btn>
            <Btn label="=" operation aoClicar={()=>{operation('=')}}></Btn>

            </View>
          </Row>
        </SafeAreaView>
      </Grid>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%'
  },
  btns:{
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
  
});
