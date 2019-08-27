import {FBLOGIN} from '../constants/action-types';
const initialState = {
  isLoggedIn: false,
  isLoggingIn: false,
  fbUserData: null
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
    case FBLOGIN.LOGGING: {
      let temp = JSON.parse(JSON.stringify(state));
      temp.isLoggingIn = action.payload;
      return temp;
    }
    case FBLOGIN.SAVEDATA :{
      let temp = JSON.parse(JSON.stringify(state));
      temp.fbUserData = action.payload;
      return temp;
    }
    default: return state
  }

};

export default FBlogin;