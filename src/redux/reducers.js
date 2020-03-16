import { combineReducers } from "redux";

const loggedIn = (state = [], action) => {
  switch(action.type) {
    case 'LOG_IN':
      return action.value
    case 'LOG_OUT':
      return action.value
    default:
      return state
  }
}

const places = (state = [], action) => {
  switch(action.type) {
    case 'FETCH_PLACES':
      return action.value
    case 'ADD_PLACE':
      return [...state, action.value]
    case 'RM_PLACE':
      const places = [...state];
      places.splice(action.value, 1);
      return places;
    default:
      return state;
  }
}

const user = (state = null) => state

export default (combineReducers({loggedIn, user, places}))