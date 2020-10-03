import React, {useReducer} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
  //state === {red: number, green : number, blue : number};
  //action === {colorToChange: 'red' || 'green' || 'blue', amount : 15 || -15}

  switch (action.colorToChange){
    case 'red': 
      return {...state, red: state.red + action.amount };
      //never going to do: state.red = state.red -15;
      //we never going to modify state values directly. so same thing inside reducer
      // ...state == { red : 0, green:0, blue :0}
      //return {green:0, blue :0, red: state.red + action.amount} -> 레드는 override
    case 'green':
      return {...state, green: state.green + action.amount };
    case 'blue':
      return {...state, blue: state.blue + action.amount };
    default :
      return state;
  }
};
//리듀서를 밖으로 뺀 이유는 한 컴포넌트 안에 state라고 불리는 두개의 다른 변수가 있으면, 에러는 안나지만 혼란스러울 수 잇음
//action = how to change state object
const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red : 0, green:0, blue :0});
  console.log(state)//{ red : 0, green:0, blue :0}
  //state == red, green, blue
  //staet == how we access all different state values. 
  //우리는 원래, 세 개의 다른 스테이트를 가지고 있었지만, 이제는 그 대신 하나의 오브젝트로 결합된거지.

  return (
    <View>
      <ColorCounter 
        onIncrease = {() => }
        onDecrease = {() => }
        color = "Red" 
      />
      <ColorCounter 
        onIncrease={()=>}
        onDecrease={()=>}
        color = "Blue"
      />
      <ColorCounter 
        onIncrease={()=>}
        onDecrease={()=>}
        color = "Green"
      />
      <View 
        style={{
          height : 150, 
          width : 150, 
          backgroundColor: `rgb(${red},${green},${blue})`
        }}>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({});

export default SquareScreen;