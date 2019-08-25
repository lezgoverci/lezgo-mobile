import React, {Component} from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import {logout} from '../actions';




class Home extends Component{
  constructor(props){
    super(props);
  }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.isLoggedIn != this.props.isLoggedIn){
      if(this.props.isLoggedIn == false){
        this.props.navigation.navigate('Welcome');
      }
    }
  }


  render(){
    return(<View style={styles.container}>
      <View><Text style={styles.text}>{"is logged in: " + this.props.isLoggedIn + ""}</Text></View>
      <View><Text style={styles.text}>{"is logging in: " + this.props.isLoggingIn + ""}</Text></View>
      <Button onPress={()=>this.logout()} title="Logout"></Button>
    </View>)
  }

  logout = () =>{
    this.props.logoutFacebook();
  }
    
  
}

const styles = StyleSheet.create({
  container :{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'white'
  },
  text:{
    color: 'black'
  }
});

const mapStateToProps = (state) => ({
  isLoggedIn : state.FBlogin.isLoggedIn,
  isLoggingIn: state.FBlogin.isLoggingIn
});

const mapDispatchToProps =  {
  logoutFacebook: () => logout()
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);




