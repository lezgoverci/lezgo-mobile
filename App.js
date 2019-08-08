/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const FBSDK = require('react-native-fbsdk');
const {
  LoginManager,
} = FBSDK;

const App = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={()=>{
        LoginManager.logInWithPermissions(['public_profile']).then(
          function(result) {
            if (result.isCancelled) {
              alert('Login was cancelled');
            } else {
              alert('Login was successful with permissions: '
                + result.grantedPermissions.toString());
            }
          },
          function(error) {
            alert('Login failed with error: ' + error);
          }
        );
      }}><Text style={styles.buttonText}>Login</Text></TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container :{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button :{
    width: 100,
    height: 50,
    backgroundColor: 'blue',
    justifyContent:'center',
  },
  buttonText :{
    color:'white',
    
    textAlign: 'center'
  }
});

export default App;
