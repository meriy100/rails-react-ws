import { combineReducers } from 'redux';
import { error_handler } from './error_handler';
import auth_token from './auth_token';
import current_user from './current_user';
import layout_state from './layout_state';

export type currentUser = {
  email : string;
}; 

export type AuthToken = {
  has_session?:boolean;
};

export type ErrorHandler = {
  message : string;
  is_show : boolean;
}; 

export type LayoutState = {
  is_drawer_open:boolean;
}

const reducer = combineReducers({current_user, auth_token, layout_state, error_handler})
export default reducer;
