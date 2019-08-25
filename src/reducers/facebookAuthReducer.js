
const initialState = {
  isLoggedIn: false
};

const FBlogin = (state = initialState, action) => {

  switch(action.type){
    case 'LOGIN' : {
      let temp = JSON.parse(JSON.stringify(state));
      temp.isLoggedIn = true;
      return temp;
    }
    case 'LOGOUT' : {
      let temp = JSON.parse(JSON.stringify(state));
      temp.isLoggedIn = false;
      return temp;
    }
    default: return state
  }

};

export default FBlogin;