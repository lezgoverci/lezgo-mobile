import {createSwitchNavigator, createStackNavigator, createAppContainer} from 'react-navigation';
import WelcomeScreen from './pages/welcome';
import HomeScreen from './pages/home';


const AppNavigator = createSwitchNavigator({
  Welcome: WelcomeScreen,
  Home: HomeScreen
},{
  initialRouteName: 'Welcome'
});

export default createAppContainer(AppNavigator);