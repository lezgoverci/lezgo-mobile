import React, { Component } from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';
import { select, swipe, toggle } from './actions';
import { connect } from 'react-redux';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: new Date(),
      firstDay: new Date((new Date()).setDate(1)),
      month: []
    }
  }

  componentDidMount() {
    this.setupCalendar();
  }

  setupCalendar = () => {
    let tempMonth = [];
    for (i = 0; i < 35; i++) {
      if (i < this.state.firstDay.getDay()) {
        tempMonth.push(null);
      }
      if (i >= this.state.firstDay.getDay()) {
        tempMonth.push(new Date((new Date()).setDate(this.state.firstDay.getDate() + i)))
      }
    }

    this.setState({ month: tempMonth });

  }

  render() {
    return (
      <View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{width: 20}}><Text style={{textAlign:'center'}}>S</Text></View>
          <View style={{width: 20}}><Text style={{textAlign:'center'}}>M</Text></View>
          <View style={{width: 20}}><Text style={{textAlign:'center'}}>T</Text></View>
          <View style={{width: 20}}><Text style={{textAlign:'center'}}>W</Text></View>
          <View style={{width: 20}}><Text style={{textAlign:'center'}}>T</Text></View>
          <View style={{width: 20}}><Text style={{textAlign:'center'}}>F</Text></View>
          <View style={{width: 20}}><Text style={{textAlign:'center'}}>S</Text></View>
        </View>
        {this.state.month.length == 0 ? null :
          <FlatList
            columnWrapperStyle={{paddingVertical: 20, justifyContent:'space-between'}}
            keyExtractor = {(item,index) => index}
            data={this.state.month}
            renderItem={({item}) => {
              return <View style={{width: 20}}><Text style={{textAlign:'center'}}>{item.getDate()}</Text></View>
            }}
            numColumns={7} />
        }

      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  calendar: state.Calendar.calendar
});

const mapDispatchToProps = {
  select: payload => select(payload),
  swipe: payload => swipe(payload),
  toggle: payload => toggle(payload)
};

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);