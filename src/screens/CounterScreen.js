import React, { useReducer } from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';


const reducer = (state, action) => {
  //state === {count : number}
  //action === {type:'increment' || 'decrement, payload: 1}
  switch(action.type){
    case 'increment':
      return {...state, count : state.count + action.payload}
      //여기서 ...state는 사실 필수아님, 왜냐면 우리가 single property를 가지고 있으니까.
    case 'decrement':
      return {...state, count : state.count - action.payload}
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, {count : 0});//initial state value

  return (
    <View>
      <Button 
        title = "Increase" 
        onPress={() => {
          dispatch({type : 'increment', payload: 1})
          //console.log(state.counter);
        }} 
      />
      <Button 
        title = "Decrease" 
        onPress={() => {
          dispatch({type : `decrement`, payload: 1})
          //console.log(state.counter);
        }} 
        //왜 $표시, 백틱 안해도 보여지는거지?
      />

      <Text>Current Count: {state.count}</Text>
    </View>
  )
};

const styles = StyleSheet.create({});

export default CounterScreen;