import React, {useReducer} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
  //state === {red: number, green : number, blue : number};
  //action == how to change our state
  //action === {type: 'change_red' || 'change_green' || 'change_blue', payload : 15 || -15}
  //이렇게 이름을 바꾸는건 actually change anything

  switch (action.type){
    case 'change_red': 
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : {...state, red: state.red + action.payload };      
    case 'change_green':
      return state.green + action.payload > 255 || state.green + action.payload < 0
        ? state
        : {...state, green: state.green + action.payload };
    case 'change_blue':
      return state.blue + action.payload > 255 || state.blue + action.payload < 0
        ? state
        : {...state, blue: state.blue + action.payload };
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
        onIncrease = {() => 
          dispatch({ colorToChange: 'red', payload: COLOR_INCREMENT })
        }
        onDecrease = {() => 
          dispatch({ colorToChange: 'red', payload: -1 * COLOR_INCREMENT })
        }
        color = "Red" 
      />
      <ColorCounter 
        onIncrease={()=> 
          dispatch({ colorToChange: 'blue', payload: COLOR_INCREMENT })
        }
        onDecrease={()=> 
          dispatch({ colorToChange: 'blue', payload: -1 * COLOR_INCREMENT })
        }
        color = "Blue"
      />
      <ColorCounter 
        onIncrease={()=> 
          dispatch({ colorToChange: 'green', payload: COLOR_INCREMENT })
        }
        onDecrease={()=> 
          dispatch({ colorToChange: 'green', payload: -1 * COLOR_INCREMENT })
        }
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