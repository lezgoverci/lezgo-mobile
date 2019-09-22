import React, {Component} from 'react';
import {createSwitchNavigator, createStackNavigator,createDrawerNavigator, createAppContainer} from 'react-navigation';
import WelcomeScreen from './src/pages/welcome';
import FeedScreen from './src/pages/home';
import InboxScreen from './src/pages/inbox';
import ItineraryCreateScreen from './src/pages/itinerary/create';

import { Provider } from 'react-redux';
import store from './src/store';

const ItineraryStackNavigator = createStackNavigator({
  CreateItinerary : ItineraryCreateScreen
});

const AuthDrawerNavigator = createDrawerNavigator({
  Feed: FeedScreen,
  Inbox: InboxScreen,
  Itinerary: ItineraryStackNavigator
},{
  drawerPosition: 'right',
  drawerType:'slide'
});

const SwitchNavigator = createSwitchNavigator({
  Welcome: WelcomeScreen,
  Auth: AuthDrawerNavigator
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