import CALENDAR from './actionTypes';

const initialState = {
  calendar:{
    activeDate: new Date(),
    view: 'week', // week, month, year
    currentMonth: null,
    currentYear: null,
    currentWeek: null
  }
  
};


const Calendar = (state = initialState, action) => {

  switch(action.type){

    case CALENDAR.TOGGLE :{
      let temp = JSON.parse(JSON.stringify(state));
      temp.calendar.view = temp.calendar.view  == 'week' ? 'month' : 'week';
      return temp;
    }

    case CALENDAR.SWIPE :{
      let temp = JSON.parse(JSON.stringify(state));

      if(temp.calendar.view == 'week'){
        if(action.payload.direction == 'right'){
          temp.calendar.currentWeek = temp.calendar.currentWeek - 1;
        }
        if(action.payload.direction == 'left'){
          temp.calendar.currentWeek = temp.calendar.currentWeek + 1;
        }
      }

      if(temp.calendar.view == 'month'){
        if(action.payload.direction == 'right'){
          temp.calendar.currentMonth = temp.calendar.currentMonth - 1;
        }
        if(action.payload.direction == 'left'){
          temp.calendar.currentMonth = temp.calendar.currentMonth + 1;
        }
      }

      if(temp.calendar.view == 'year'){
        if(action.payload.direction == 'right'){
          temp.calendar.currentYear = temp.calendar.currentYear - 1;
        }
        if(action.payload.direction == 'left'){
          temp.calendar.currentYear = temp.calendar.currentYear + 1;
        }
      }
    }

    default: return state
  }

};

export default Calendar;