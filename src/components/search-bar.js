import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {focusSearch, blurSearch} from '../actions';
import { connect } from 'react-redux';



class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { keyword: "" }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={{ height: 55 }}>
            <View style={styles.searchBar}>
              <View style={styles.searchIcons}>
                <Ionicons name="md-add" style={styles.icon} />
                <TextInput placeholder='Search' style={styles.searchBox} onBlur={()=> this.props.blurSearch()} onFocus={()=> this.props.focusSearch()}></TextInput>
                <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                  <Ionicons name="md-menu" style={styles.icon} />
                </TouchableOpacity>
              </View>
            </View>
          </View>

        </View>

        <View style={[styles.card, {display: this.props.isFocused ? 'flex' : 'none'}]}>
          <View style={{ height: 55 }}>
            <View style={styles.filter}>
              <View style={styles.filterIcons}>
                <MaterialIcon name='local-activity' style={styles.icon} />
                <MaterialIcon name='local-bar' style={styles.icon} />
                <MaterialIcon name='people' style={styles.icon} />
                <MaterialIcon name='view-list' style={styles.icon} />
              </View>
            </View>
          </View>

        </View>

        <View style={[styles.card, {display: this.props.isFocused ? 'flex' : 'none'}]}>
          <View style={styles.autoSuggestWrapper}>
          <View style={styles.autoSuggestItems}>
            <Text>Palawan</Text>
          </View>
          <View style={styles.autoSuggestItems}>
            <Text>Palawan</Text>
          </View>
          <View style={styles.autoSuggestItems}>
            <Text>Palawan</Text>
          </View>
          </View>
          
          
        </View>

      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    zIndex: 999,

  },
  icon: {
    fontSize: 28,
    color: '#5BAEB2',
  },
  searchBar: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 10,
    fontSize: 16
  },
  searchIcons: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  card: {
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


  },
  filter: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    width: '70%'
  },

  filterIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  autoSuggestWrapper:{
    width:'90%',
    alignSelf:'center'
  },
  autoSuggestItems:{
    paddingVertical:10
  }
})

const mapStateToProps = (state) => ({
  isFocused: state.Search.isFocused,
});

const mapDispatchToProps = {
  focusSearch: () => focusSearch(),
  blurSearch: () => blurSearch()
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);