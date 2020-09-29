//part 1. Import libraries we need to create a component
import React from 'react';
import { Text, StyleSheet ,View } from 'react-native';

//part 2. Create a component - a function that returns some 'JSX'
const ComponentsScreen = () => {  
    const myname = 'Arden';

    return (
        <View>
            <Text style = {styles.textStyle}>Getting started with react native!</Text>
            <Text style = {styles.namestyle}>My name is {myname}</Text> 
        </View>
    );
};

//part 3. Create a stylesheet to style our component
const styles = StyleSheet.create({
    textStyle : {
        fontSize: 45
    },
    namestyle : {
        fontSize: 20
    }
});

//part 4. Export the component so we can use it elsewhere in our project
export default ComponentsScreen;

//go to App.js(= route directory) because I want to show this components file