import React, {Component} from 'react';
import {View, StyleSheet, Text, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import Button from '../components/button';

class Welcome extends Component{
  constructor(props){
    super(props);
  }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.isLoggedIn != this.props.isLoggedIn){
      if(this.props.isLoggedIn == true){
        this.props.navigation.navigate('Home');
      }
    }
  }

  render(){
    return(<View style={styles.container}>
      <ActivityIndicator size="large" color="black" animating={this.props.isLoggingIn}/>
      <View><Text>{"is logged in: " + this.props.isLoggedIn + ""}</Text></View>
      <View><Text>{"is logging in: " + this.props.isLoggingIn + ""}</Text></View>
      <Button btnColor="#4267b2" text="Login with Facebook"/>
    </View>)
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
  isLoggingIn: state.FBlogin.isLoggingIn
});



export default connect(mapStateToProps)(Welcome);