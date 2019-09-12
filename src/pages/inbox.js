import React, {Component} from 'react';
import {View} from 'react-native';
import { connect } from 'react-redux';
import SearchBar from '../components/search-bar';

class Inbox extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <View>
        <SearchBar navigation={this.props.navigation} />
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.FBlogin.isLoggedIn,
  isLoggingIn: state.FBlogin.isLoggingIn
});

const mapDispatchToProps = {
  logoutFacebook: () => logout()
}


export default connect(mapStateToProps, mapDispatchToProps)(Inbox);