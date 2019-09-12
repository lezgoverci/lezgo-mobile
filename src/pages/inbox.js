import React, {Component} from 'react';
import { connect } from 'react-redux';

class Inbox extends Component{}

const mapStateToProps = (state) => ({
  isLoggedIn: state.FBlogin.isLoggedIn,
  isLoggingIn: state.FBlogin.isLoggingIn
});

const mapDispatchToProps = {
  logoutFacebook: () => logout()
}


export default connect(mapStateToProps, mapDispatchToProps)(Inbox);