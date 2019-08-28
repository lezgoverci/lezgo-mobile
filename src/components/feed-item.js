import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

class FeedItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.card}>
        <Text style={styles.title}>{this.props.data.title}</Text>
        <Text style={styles.data}>{this.props.data.groupName}</Text>
        <Text style={styles.data}>{this.props.data.date}</Text>
        <Text style={styles.data}>{this.props.data.duration}</Text>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  card: {
    height: 120,
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
    padding:20
  },
  title:{
    fontSize: 18,
    color: '#626262',
    fontWeight: 'bold',
    marginBottom:10
  },
  data:{
    fontSize: 14,
    color:'#868686'
  }
})

export default FeedItem;