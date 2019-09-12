import FBlogin from './facebookAuthReducer';
import Search from './search';
import {combineReducers} from 'redux';

export default combineReducers({
  FBlogin, Search
});
