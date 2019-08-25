import React, {Component} from 'react';
import {createSwitchNavigator, createStackNavigator, createAppContainer} from 'react-navigation';
import WelcomeScreen from './src/pages/welcome';
import HomeScreen from './src/pages/home';

import { Provider } from 'react-redux';
import store from './src/store';

const SwitchNavigator = createSwitchNavigator({
  Welcome: WelcomeScreen,
  Home: HomeScreen
},{
  initialRouteName: 'Welcome'
});

const AppNavigator = createAppContainer(SwitchNavigator);

class App extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Provider store = {store} >
          <AppNavigator />
      </Provider>
    )
  }
}


export default App;