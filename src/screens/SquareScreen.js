import React, {useReducer} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {

  switch (action.colorToChange){
    case 'red': 
      return {...state, red: state.red + action.amount };
    case 'green':
      return {...state, green: state.green + action.amount };
    case 'blue':
      return {...state, blue: state.blue + action.amount };
    default :
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red : 0, green:0, blue :0});
  //dispatch의 의미는 runMyReducer고, 디스패치는 will be provided as action(위에 우리가 작서한 reducer의 second argument로)
  //그래서 위의 reducer함수 안에서는 decide how to change our state.
  const {red, green, blue} = state;
  //혼란스러울 수 있으니 한번 더 정의를 해준듯,

  return (
    <View>
      <ColorCounter 
        onIncrease = {() => dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT })}
        onDecrease = {() => dispatch({ colorToChange: 'red', amount: -1 * COLOR_INCREMENT })}
        color = "Red" 
      />
      <ColorCounter 
        onIncrease={()=> dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT })}
        onDecrease={()=> dispatch({ colorToChange: 'blue', amount: -1 * COLOR_INCREMENT })}
        color = "Blue"
      />
      <ColorCounter 
        onIncrease={()=> dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT })}
        onDecrease={()=> dispatch({ colorToChange: 'green', amount: -1 * COLOR_INCREMENT })}
        color = "Green"
      />
      <View 
        style={{
          height : 150, 
          width : 150, 
          backgroundColor: `rgb(${state.red},${state.green},${state.blue})`
        }}>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({});

export default SquareScreen;