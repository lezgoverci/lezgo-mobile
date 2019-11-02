import FBlogin from '../components/facebook-auth/reducer';
import SearchBar from '../components/search-bar/reducer';
import Itinerary from '../components/itinerary/reducer';
import Calendar from '../components/calendar/reducer';
import {combineReducers} from 'redux';

export default combineReducers({
  FBlogin, SearchBar, Itinerary, Calendar
});
