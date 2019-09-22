import {ITINERARY} from '../constants/itinerary-action-types';
const initialState = {
  itinerary: {
    calendar: 'week',
    title:'',
    days:[],
    activities:[]
  },
  currentDayIndex: 0
};


const Itinerary = (state = initialState, action) => {

  switch(action.type){
    case ITINERARY.CREATE : {
      let temp = JSON.parse(JSON.stringify(state));
      return temp;
    }

    case ITINERARY.SAVE:{
      let temp = JSON.parse(JSON.stringify(state));
      return temp;
    }

    case ITINERARY.ADD_ACTIVITY :{
      let temp = JSON.parse(JSON.stringify(state));
      temp.itinerary.activities.push(action.payload.id);
      return temp;
    }

    case ITINERARY.ADD_DAY :{
      let temp = JSON.parse(JSON.stringify(state));
      let day = {
        title: '',
        date: action.payload.date,
        meetupPlace: ''
      };
      temp.itinerary.days.push(day);
      return temp;
    }

    case ITINERARY.REMOVE_ACTIVITY :{
      let temp = JSON.parse(JSON.stringify(state));
      temp.itinerary.activities.splice(action.payload.index,1);
      return temp;
    }

    case ITINERARY.REMOVE_DAY :{
      let temp = JSON.parse(JSON.stringify(state));
      temp.itinerary.days.splice(action.payload.index,1);
      return temp;
    }

    case ITINERARY.TYPE :{
      let temp = JSON.parse(JSON.stringify(state));
      

      if(action.payload.field == 'itinerary-title'){
        temp.itinerary.title = action.payload.value
      }


      if(action.payload.field == 'day-title'){
        temp.itinerary.days[action.payload.index].title = action.payload.value;
      }

      if(action.payload.field == 'itinerary-meetup'){
        temp.itinerary.days[action.payload.index].meetupPlace = action.payload.value;
      }


      return temp;
    }

    case ITINERARY.TOGGLE_CALENDAR :{
      let temp = JSON.parse(JSON.stringify(state));
      temp.itinerary.calendar = temp.calendar == 'week' ? 'month' : 'week';
      return temp;
    }

    default: return state
  }

};

export default Itinerary;