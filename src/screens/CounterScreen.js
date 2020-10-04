import React, { useReducer } from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

const NUMBER_INCREMENT = 1;

const reducer = (state, action) => {
  switch(action.type){
    case 'increase_counter':
      return {...state, counter : state.counter + action.payload}
    case 'decrease_counter':
      return {counter : state.counter + action.payload}
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, {counter : 0});
  //counter 값 설정 안해줘서 계속 undefined,nan보여짐.
  const counter = state;

  return (
    <View>
      <Button 
        title = "Increase" 
        onPress={() => {
          dispatch({type : `increase_counter`, payload:NUMBER_INCREMENT})
          //console.log(state.counter);
        }} 
      />
      <Button 
        title = "Decrease" 
        onPress={() => {
          dispatch({type : `decrease_counter`, payload: -1 * NUMBER_INCREMENT})
          //console.log(state.counter);
        }} 
        //왜 $표시, 백틱 안해도 보여지는거지?
      />

      <Text>Current Count: {state.counter}</Text>
    </View>
  )
};

const styles = StyleSheet.create({});

export default CounterScreen;