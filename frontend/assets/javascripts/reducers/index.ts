import { combineReducers } from 'redux';
import { error_handler } from './error_handler'

export type currentUser = {
  email : string;
}; 

export type ReduxState = {
  current_user :currentUser;
}


const initial = {
  email: "",
}

const current_user = (state = initial, action:any):currentUser => {
  switch(action.type) {
    case "SET_CURRENT_USER":
      return action.payload;
    default:
      return state;
  }
}


const reducer = combineReducers({current_user, error_handler})
export default reducer;
