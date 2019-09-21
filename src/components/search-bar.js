import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { focusSearch, blurSearch } from '../actions';
import { connect } from 'react-redux';
import Theme from '../theme/style';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { keyword: "" }
  }

  render() {
    return (
      <View style={Theme.container}>
        <View style={Theme.card}>

          <View style={Theme.searchBar}>
            <View style={Theme.searchIcons}>
              <Ionicons name="md-add" style={Theme.icon} />
              <TextInput placeholder='Search' style={Theme.searchBox} onBlur={() => this.props.blurSearch()} onFocus={() => this.props.focusSearch()}></TextInput>
              <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                <Ionicons name="md-menu" style={Theme.icon} />
              </TouchableOpacity>
            </View>

          </View>

        </View>

        <View style={[Theme.card, { display: this.props.isFocused ? 'flex' : 'none' }]}>

          <View style={Theme.filter}>
            <View style={Theme.filterIcons}>
              <MaterialIcon name='local-activity' style={Theme.icon} />
              <MaterialIcon name='local-bar' style={Theme.icon} />
              <MaterialIcon name='people' style={Theme.icon} />
              <MaterialIcon name='view-list' style={Theme.icon} />
            </View>

          </View>

        </View>

        <View style={[Theme.card, { display: this.props.isFocused ? 'flex' : 'none' }]}>
          <View style={Theme.autoSuggestWrapper}>
            <View style={Theme.autoSuggestItems}>
              <Text style={Theme.text}>Palawan</Text>
            </View>
            <View style={Theme.autoSuggestItems}>
              <Text style={Theme.text}>Palawan</Text>
            </View>
            <View style={Theme.autoSuggestItems}>
              <Text style={Theme.text}>Palawan</Text>
            </View>
          </View>


        </View>

      </View>
    )
  }

}

const mapStateToProps = (state) => ({
  isFocused: state.Search.isFocused,
});

const mapDispatchToProps = {
  focusSearch: () => focusSearch(),
  blurSearch: () => blurSearch()
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);