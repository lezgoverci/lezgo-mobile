import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Theme from '../../theme/style';

class FeedItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={Theme.card}>
        <Text style={[Theme.heading3, Theme.textBold]}>{this.props.data.title}</Text>
        <Text style={Theme.text}>{this.props.data.groupName}</Text>
        <Text style={Theme.text}>{this.props.data.date}</Text>
        <Text style={Theme.text}>{this.props.data.duration}</Text>
      </View>
    )
  }

}

export default FeedItem;