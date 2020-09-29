import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from './src/screens/ComponentsScreen';
//how to show componentsscreen. ./ = current directory

//what's that 'appNavigator' in the 'App.js' file?
//it's a tool from a library called 'React Navigation' that is used to show different screens to the user


//decides what contents we gonna show on the screen
const navigator = createStackNavigator(
  {
    Home: HomeScreen, 
    Components : ComponentsScreen 
  },
  //first object
  {
    initialRouteName: "Components",
    defaultNavigationOptions: {
      title: "App"
    }
  }
  //second object
);

export default createAppContainer(navigator);
