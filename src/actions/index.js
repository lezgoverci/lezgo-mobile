import {FBLOGIN, CHAT, CONVERSATION, MEMBERS, MESSAGE, REACTION, SEARCH} from '../action-types/action-types';

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

export function focusSearch(payload){
  return {type: SEARCH.FOCUS, payload:payload}
}

export function blurSearch(payload){
  return {type: SEARCH.BLUR, payload:payload}
}

