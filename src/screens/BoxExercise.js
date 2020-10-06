import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BoxExercise = () => {
  return(
    <View style = {styles.viewstyle}>
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
  viewstyle:{
    flexDirection : "row",
    justifyContent : "space-between"
  },
  viewOnestyle:{
    height : 50, 
    width : 100, 
    backgroundColor: `rgb(255,0,0)`
  },
  viewTwostyle:{
    height : 50, 
    width : 100, 
    backgroundColor: `rgb(0,255,0)`,
    top: 50,
  },
  viewThreestyle:{
    height : 50, 
    width : 100, 
    backgroundColor: `rgb(0,0,255)`,
  }
});

export default BoxExercise;