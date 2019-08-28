import React, { Component } from 'react';
import { TouchableOpacity, Dimensions, View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {login, logout, logging} from '../actions';
const FBSDK = require('react-native-fbsdk');
const {
  LoginManager,
  AccessToken
} = FBSDK;

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {color: 'blue'}
  }

  componentDidMount(){
    this.setState({color: this.props.btnColor});
  }

  

  login = () =>{
    
    let logging = (payload) => this.props.logging(payload);
    let login = () => this.props.loginWithFacebook();
    let navigate = route =>{
      this.props.navigation.navigate(route);
    };
    logging(true);
    
    LoginManager.logInWithPermissions(['public_profile,email']).then(
      function (result) {
        if (result.isCancelled) {
          alert('Login was cancelledt' + JSON.stringify(result));
        } else {
          
          AccessToken.getCurrentAccessToken()
          .then(data =>{
            //alert(JSON.stringify(data));
            if(data.accessToken != null){
              navigate('Auth');
            }
            
          });
            
            logging(false);
            login();
            
        }

        
      },
      function (error) {
        alert('Login failed with error: ' + error);
      }
    );
  }

  logout = () =>{
    this.props.logoutFacebook({});
  }

  render() {
    return (
      <View>
        <TouchableOpacity style={{...styles.container, backgroundColor: this.state.color}} onPress={() => this.login()} >
          <View style={styles.button}>
            <Icon name="logo-facebook" style={styles.buttonIcon} />
            <Text style={styles.buttonText}>{this.props.text}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({

  container:{
    borderRadius: 5,
  },
  button: {
    borderRadius: 5, 
    height: 40, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
    paddingHorizontal: 15,
    maxWidth: 300
  },
  buttonIcon:{
    fontSize: 28, 
    color: '#fff', 
    paddingRight: 10
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  }
});

const mapStateToProps = (state) => ({
  isLoggedIn : state.FBlogin.isLoggedIn
});

const mapDispatchToProps =  {
  loginWithFacebook: (payload) => login(payload),
  logoutFacebook: () => logout(),
  logging: (payload) => logging(payload)
}


export default connect(mapStateToProps, mapDispatchToProps)(Button);