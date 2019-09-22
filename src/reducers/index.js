import FBlogin from './facebookAuthReducer';
import Search from './search';
import Itinerary from './itinerary';
import Calendar from './calendar';
import {combineReducers} from 'redux';

export default combineReducers({
  FBlogin, Search, Itinerary, Calendar
});
