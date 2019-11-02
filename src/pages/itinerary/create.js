import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { type, toggleCalendar, addDay, addActivity, removeActivity, removeDay } from '../../components/itinerary/actions';
import { connect } from 'react-redux';
import Theme from '../../theme/style';
import Calendar from '../../components/calendar/calendar';

class CreateItinerary extends Component {

  static navigationOptions = {
    headerTitle: 'Itinerary Planner',
    headerRight: <View><Text>{(new Date()).toLocaleDateString()}</Text></View>
  }

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.addDay();
  }

  render() {
    return (
      <View style={Theme.container}>
        <View style={Theme.row}>
          <Calendar />
        </View>
        <View style={Theme.row}>
          <TextInput onChangeText={(value) =>{this.props.type({field:'itinerary-title',value: value})}} style={[Theme.heading1, Theme.noPadding, Theme.textBold, Theme.textInput]} placeholder="Name your itinerary"></TextInput>
        </View>
        <View style={Theme.row}>
          <Text style={[Theme.text, Theme.textBold]}>Day {this.props.itinerary.days.length}</Text>
        </View>
        <View style={Theme.row}>
          <TextInput onChangeText={(value) =>{this.props.type({field:'day-title',value: value, index: this.props.currentDayIndex})}} style={[Theme.heading1, Theme.noPadding, Theme.textInput]} placeholder="Type a title e.g. Food Trip"></TextInput>
        </View>
        <View style={Theme.row}>
          <TextInput onChangeText={(value) =>{this.props.type({field:'itinerary-meetup',value: value, index: this.props.currentDayIndex})}} style={[Theme.noPadding, Theme.textInput]} placeholder="Where are you going to meet?"></TextInput>
        </View>
        <View style={Theme.row}>
          <Text style={[Theme.text, Theme.textBold]}>Activities</Text>
        </View>

        <View style={Theme.row}>
          <TouchableOpacity>
            <Text style={[Theme.textButton, Theme.textBold]}>Add Activity</Text>
          </TouchableOpacity>
        </View>



      </View>
    )
  }

  addDay = () =>{
    this.props.addDay({date: new Date()})
  }
}

const mapStateToProps = (state) => ({
    itinerary: state.Itinerary.itinerary,
    currentDayIndex: state.Itinerary.currentDayIndex
  })



const mapDispatchToProps = {
  type: payload => type(payload),
  toggleCalendar: () => toggleCalendar(),
  addDay: payload => addDay(payload),
  addActivity: payload => addActivity(payload),
  removeDay: payload => removeDay(payload),
  removeActivity: payload => removeActivity(payload)
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateItinerary);