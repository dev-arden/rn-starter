//part 1. Import libraries we need to create a component
import React from 'react';//react : how different components work together
import { Text, StyleSheet } from 'react-native';//react-native : react랑은 완전히 다름

//part 2. Create a component - a function that returns some 'JSX'
const ComponentsScreen = () => {
    return <Text style={styles.textStyle}>This is the components screen</Text>;
    //react-native bundler가 이 코드를 javascript로 변형?함. (babeljs.io에서 확인 가능)
    //저 코드가 jsx인 듯, jsx가 더 쉽고 변형하기 쉽다. 
    // JSX = dialect of javascript that tells React what content we want to show
};

//part 3. Create a stylesheet to style our component
const styles = StyleSheet.create({
    textStyle : {
        fontSize: 25
    }
});

//part 4. Export the component so we can use it elsewhere in our project
export default ComponentsScreen;

//go to App.js(= route directory) because I want to show this components file