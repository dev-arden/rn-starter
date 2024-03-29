import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen'
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen';
import TextScreen from './src/screens/TextScreen';
import BoxScreen from './src/screens/BoxScreen';
import BoxExercise from './src/screens/BoxExercise';
//how to show componentsscreen. ./ = current directory

//what's that 'appNavigator' in the 'App.js' file?
//it's a tool from a library called 'React Navigation' that is used to show different screens to the user


//decides what contents we gonna show on the screen
const navigator = createStackNavigator(
  {
    Home: HomeScreen, 
    Components : ComponentsScreen ,
    List : ListScreen ,
    Image : ImageScreen,
    Counter : CounterScreen,
    Color : ColorScreen,
    Square : SquareScreen,
    Text : TextScreen,
    Box : BoxScreen,
    BoxEx : BoxExercise
  },
  //first object
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
  //second object
);

export default createAppContainer(navigator);
