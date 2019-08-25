import React, { Component } from 'react';
import { TouchableOpacity, Dimensions, View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {login} from '../actions';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {color: 'blue'}
  }

  componentDidMount(){
    this.setState({color: this.props.btnColor});
  }

  login = () =>{
    this.props.loginWithFacebook({});
  }

  render() {
    return (
      <View>
        <TouchableOpacity style={{...styles.container, backgroundColor: this.state.color}} onPress={() => this.login()} >
          <View style={styles.button}>
            <Icon name="logo-facebook" style={styles.buttonIcon} />
            <Text style={styles.buttonText}>{this.props.text + " " + this.props.isLoggedIn}</Text>
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
  loginWithFacebook: (payload) => login(payload)
}


export default connect(mapStateToProps, mapDispatchToProps)(Button);