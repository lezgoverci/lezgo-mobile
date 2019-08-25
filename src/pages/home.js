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
      <View><Text style={styles.text}>{this.props.isLoggedIn + ""}</Text></View>
      <Button onPress={()=>this.props.logoutFacebook()} title="Logout"></Button>
    </View>)
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
  isLoggedIn : state.FBlogin.isLoggedIn
});

const mapDispatchToProps =  {
  loginWithFacebook: (payload) => login(payload),
  logoutFacebook: () => logout()
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);




