import React, { Component } from 'react';
import { TouchableOpacity, Dimensions, View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {color: 'blue'}
  }

  componentDidMount(){
    this.setState({color: this.props.btnColor});
  }

  render() {
    return (
      <View>
        <TouchableOpacity style={{...styles.container, backgroundColor: this.state.color}} onPress={() => this.props.callback()} >
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

export default Button;