import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const ColorScreen = () => {
  const [colors, setColors] = useState([]);//update the colors using the setColors
  console.log(colors);


  return (
  <View>
    <Button title="Add a Color" onPress={ () => {
      setColors([...colors, randomRgb()]) 
      //[]는 새로운 배열이라는 의미임.
      //...colors = take a look at the colors array, take all the elements inside there. amd add them inside that neww array
    }}/>
    <View 
      style={{ height:100, width:100, backgroundColor:randomRgb() }} 
    />
  </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256); //random -> 0~1사이의 랜덤, rgb값은 0~255
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`; //not single quote, backtick
};

const styles = StyleSheet.create({});

export default ColorScreen;