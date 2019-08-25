import {FBLOGIN} from '../constants/action-types';
const initialState = {
  isLoggedIn: false
};

const FBlogin = (state = initialState, action) => {

  switch(action.type){
    case FBLOGIN.LOGIN : {
      let temp = JSON.parse(JSON.stringify(state));
      temp.isLoggedIn = true;
      return temp;
    }
    case FBLOGIN.LOGOUT: {
      let temp = JSON.parse(JSON.stringify(state));
      temp.isLoggedIn = false;
      return temp;
    }
    default: return state
  }

};

export default FBlogin;