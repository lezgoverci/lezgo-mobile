import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {connect} from 'react-redux';



class Home extends Component{
  constructor(props){
    super(props);
  }


  render(){
    return(<View style={styles.container}>
      <View><Text style={styles.text}>{this.props.isLoggedIn + ""}</Text></View>
    </View>)
  }
    
  
}

const styles = StyleSheet.create({
  container :{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'green'
  },
  text:{
    color: 'white'
  }
});

const mapStateToProps = (state) => ({
  isLoggedIn : state.FBlogin.isLoggedIn
});


export default connect(mapStateToProps)(Home);