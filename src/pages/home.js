import React, { Component } from 'react';
import { View, StyleSheet, Text, Button, ScrollView, FlatList, ImageBackground, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { logout } from '../actions';
import FeedItem from '../components/feed-item';
import SearchBar from '../components/search-bar';
import Theme from '../theme/style';



class Home extends Component {

  static navigationOptions = {
    title: 'Feed',
  };


  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.isLoggedIn != this.props.isLoggedIn) {
      if (this.props.isLoggedIn == false) {
        this.props.navigation.navigate('Welcome');
      }
    }
  }


  render() {
    return (
      <ImageBackground source={require('../../resources/profilepic.jpg')} style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height }} resizeMode='cover'>
        <SearchBar navigation={this.props.navigation} />
    
        <View style={Theme.container}>
          <ScrollView
           style={Theme.scrollView}>
            <View><Text style={[Theme.heading1, Theme.textBold]}>John Doe</Text></View>
            <View><Text style={[Theme.heading2, Theme.textBold]}>Upcoming Trips</Text></View>
            <FlatList
              data={[
                { id: 1, 
                  title: 'Trip to Batanes',
                  groupName: 'Team Laagan',
                  date: 'September 3, 2019',
                  duration: '3D2N'
                }, 
                { id: 2, 
                  title: 'Boracay Escapade',
                  groupName: 'Team Laagan',
                  date: 'November 20, 2019',
                  duration: '3D2N'
                },
                { id: 3, 
                  title: 'Trip to Batanes',
                  groupName: 'Team Laagan',
                  date: 'September 3, 2019',
                  duration: '3D2N'
                }, 
                { id: 4, 
                  title: 'Boracay Escapade',
                  groupName: 'Team Laagan',
                  date: 'November 20, 2019',
                  duration: '3D2N'
                },
                { id: 5, 
                  title: 'Trip to Batanes',
                  groupName: 'Team Laagan',
                  date: 'September 3, 2019',
                  duration: '3D2N'
                }, 
                { id: 6, 
                  title: 'Boracay Escapade',
                  groupName: 'Team Laagan',
                  date: 'November 20, 2019',
                  duration: '3D2N'
                },
                { id: 7, 
                  title: 'Trip to Batanes',
                  groupName: 'Team Laagan',
                  date: 'September 3, 2019',
                  duration: '3D2N'
                }, 
                { id: 8, 
                  title: 'Boracay Escapade',
                  groupName: 'Team Laagan',
                  date: 'November 20, 2019',
                  duration: '3D2N'
                }
              ]}
              renderItem={({ item }) => <FeedItem data={item} />}
              keyExtractor={(item) => item.id}
            />
          </ScrollView>
        </View>
      </ImageBackground>
    )
  }

  logout = () => {
    this.props.logoutFacebook();
  }


}


const mapStateToProps = (state) => ({
  isLoggedIn: state.FBlogin.isLoggedIn,
  isLoggingIn: state.FBlogin.isLoggingIn
});

const mapDispatchToProps = {
  logoutFacebook: () => logout()
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);




