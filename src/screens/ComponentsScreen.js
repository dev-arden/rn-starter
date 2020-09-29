//part 1. Import libraries we need to create a component
import React from 'react';
import { Text, StyleSheet ,View} from 'react-native';

//part 2. Create a component - a function that returns some 'JSX'
const ComponentsScreen = () => { 
    const greeting = <Text>Hello to you</Text>;
    const greeting2 = ['aaa', 'bbb'];
    
    return (
        <View>
            <Text style={styles.textStyle}>This is the components screen</Text> 
            <Text>{greeting}</Text>   
            <Text>{greeting2}</Text> 
            <Text>Hello to you</Text> 
            {greeting} 
        </View>
    );  
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