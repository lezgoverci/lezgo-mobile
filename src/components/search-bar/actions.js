import SEARCH from './actionTypes';

export function focusSearch(payload){
  return {type: SEARCH.FOCUS, payload:payload}
}

export function blurSearch(payload){
  return {type: SEARCH.BLUR, payload:payload}
}

