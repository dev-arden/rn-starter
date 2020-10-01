import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const ColorScreen = () => {
  return (
  <View>
    <Button title="Add a Color" />
    <View 
      //style={{ height:100, width:100, backgroundColor:'rgb(0,255,0)' }} 
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