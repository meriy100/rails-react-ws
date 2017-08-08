import { combineReducers } from 'redux';
import { error_handler } from './error_handler';
import auth_token from './auth_token';
import current_user from './current_user';
import layout_state from './layout_state';
import users from './users';

export type currentUser = {
  id: number;
  name: string;
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

export type User = {
  id: number;
  name: string;
  email: string;
}

export type State = {
  current_user?:currentUser;
  users:Array<User> 
  auth_token:AuthToken; 
  layout_state:LayoutState; 
  error_handler:ErrorHandler;
}

const reducer = combineReducers({
  current_user, 
  users, 
  auth_token, 
  layout_state, 
  error_handler
})
export default reducer;
