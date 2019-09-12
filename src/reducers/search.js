import {SEARCH} from '../constants/action-types';
const initialState = {
  isFocused: false,
};

const Search = (state = initialState, action) => {

  switch(action.type){
    case SEARCH.FOCUS : {
      let temp = JSON.parse(JSON.stringify(state));
      temp.isFocused = true;
      return temp;
    }

    case SEARCH.BLUR:{
      let temp = JSON.parse(JSON.stringify(state));
      temp.isFocused = false;
      return temp;
    }

    default: return state
  }

};

export default Search;