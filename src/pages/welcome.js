import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';


const FBSDK = require('react-native-fbsdk');
const {
  LoginManager,
} = FBSDK;

import Button from '../components/button';

class Welcome extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(<View style={styles.container}>
      <Button btnColor="#4267b2" text="Login with Facebook"/>
    </View>)
  }
    

  // login = () => {
  //   LoginManager.logInWithPermissions(['public_profile']).then(
  //     function (result) {
  //       if (result.isCancelled) {
  //         alert('Login was cancelled');
  //       } else {
  //         alert('Login was successful with permissions: '
  //           + result.grantedPermissions.toString());
  //       }
  //     },
  //     function (error) {
  //       alert('Login failed with error: ' + error);
  //     }
  //   );
  // }
  
}

const styles = StyleSheet.create({
  container :{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#14D1D9'
  }
});


export default Welcome;