import {ITINERARY} from '../constants/itinerary-action-types';

export function create(payload){
  return {type: ITINERARY.CREATE, payload:payload}
}

export function save(payload){
  return {type: ITINERARY.SAVE, payload:payload}
}

export function addDay(payload){
  return {type: ITINERARY.ADD_DAY, payload:payload}
}

export function removeDay(payload){
  return {type: ITINERARY.REMOVE_DAY, payload:payload}
}

export function addActivity(payload){
  return {type: ITINERARY.ADD_ACTIVITY, payload:payload}
}

export function removeActivity(payload){
  return {type: ITINERARY.REMOVE_ACTIVITY, payload:payload}
}

export function share(payload){
  return {type: ITINERARY.SHARE, payload:payload}
}

export function type(payload){
  return {type: ITINERARY.TYPE, payload:payload}
}

export function toggleCalendar(payload){
  return {type: ITINERARY.TOGGLE_CALENDAR, payload:payload}
}