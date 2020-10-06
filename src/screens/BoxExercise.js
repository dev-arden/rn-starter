import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BoxExercise = () => {
  return(
    <View style = {styles.parentStyle}>
      <View style = {styles.viewOnestyle}>
      </View> 
      <View style = {styles.viewTwostyle}>
      </View>
      <View style = {styles.viewThreestyle}>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  parentStyle:{
    borderWidth : 3,
    borderColor : 'black',
    height : 100,
    flexDirection : 'row',
    justifyContent : 'space-between'
  },
  viewOnestyle:{
    height : 50, 
    width : 50, 
    backgroundColor: 'red'
  },
  viewTwostyle:{
    height : 50, 
    width : 50, 
    backgroundColor: 'green',
    alignSelf: 'flex-end'
  },
  viewThreestyle:{
    height : 50, 
    width : 50, 
    backgroundColor: 'blue',
  }
});

export default BoxExercise;