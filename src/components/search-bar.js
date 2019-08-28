import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {keyword: ""}
  }

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.card}>
        <Icon name="md-add" style={styles.icon} />
        <Text  style={styles.searchBox}>Search</Text>
        <TouchableOpacity onPress={()=>this.props.navigation.openDrawer()}>
          <Icon name="md-menu" style={styles.icon} />
        </TouchableOpacity>
        
      </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical:10,
    zIndex:999,

  },
  icon:{
    fontSize: 28, 
    color: '#5BAEB2', 
  },
  searchBox:{
    flex:1, 
    flexDirection:'row', 
    paddingLeft:10,
    fontSize: 16
  },
  card: {
    height: 55,
    width: Dimensions.get('window').width - 50,
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginBottom: 12,
    borderRadius: 5,
    padding:20,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
})

export default SearchBar;