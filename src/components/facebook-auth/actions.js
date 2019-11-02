import FBLOGIN from './actionTypes';

// Action Creators

export function login(payload) {
  return { type: FBLOGIN.LOGIN, payload: payload }
};

export function logout(payload) {
  return { type: FBLOGIN.LOGOUT, payload: payload }
};

export function logging(payload){
  return {type: FBLOGIN.LOGGING, payload: payload}
}

export function saveData(payload){
  return {type: FBLOGIN.SAVEDATA, payload: payload}
}


// Thunk Actions