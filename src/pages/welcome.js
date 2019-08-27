import React, {Component} from 'react';
import {View, StyleSheet, Text, ActivityIndicator, Image} from 'react-native';
import {connect} from 'react-redux';
import Button from '../components/button';
import {saveData} from '../actions';

const FBSDK = require('react-native-fbsdk');
const {
  GraphRequest,
  GraphRequestManager,
} = FBSDK;

class Welcome extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    // const infoRequest = new GraphRequest(
    //   '/me?fields=first_name,last_name,picture',
    //   null,
    //   this._responseInfoCallback,
    // );
          
    // new GraphRequestManager().addRequest(infoRequest).start();
  }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.isLoggedIn != this.props.isLoggedIn){
      if(this.props.isLoggedIn == true){
        this.props.navigation.navigate('Home');
      }
    }
  }

  saveData = (payload) => {
    //alert(JSON.stringify(payload));
    this.props.saveData(payload);
  }

  render(){
    return(<View style={styles.container}>
      <Image style={{backgroundColor:'white', width:100, height:100, borderRadius:50, marginBottom:50}} source={{uri:this.props.fbUserData == null ? null : this.props.fbUserData.picture.data.url}} />
      <Button btnColor="#4267b2" text={this.props.fbUserData == null ? "Login with Facebook" : "Continue as " + this.props.fbUserData.first_name }/>
      <ActivityIndicator size="large" color="black" animating={this.props.isLoggingIn}/>
    </View>)
  }

  _responseInfoCallback = (error, result) => {
    if (error) {
      //alert('Error fetching data: ' + JSON.stringify(error));
    } else {
      this.saveData(result);
      //alert('Success fetching data: ' + JSON.stringify(result));
    }
  }
  
  
}

const styles = StyleSheet.create({
  container :{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#14D1D9'
  }
});

const mapStateToProps = (state) => ({
  isLoggedIn : state.FBlogin.isLoggedIn,
  isLoggingIn: state.FBlogin.isLoggingIn,
  fbUserData: state.FBlogin.fbUserData
});

const mapDispatchToProps = {
  saveData: (payload) => saveData(payload)
}



export default connect(mapStateToProps, mapDispatchToProps)(Welcome);