import {CALENDAR} from './calendar';


export function toggle(payload) {
  return { type: CALENDAR.TOGGLE, payload: payload }
};


export function select(payload) {
  return { type: CALENDAR.SELECT, payload: payload }
};

export function swipe(payload) {
  return { type: CALENDAR.SWIPE, payload: payload }
};