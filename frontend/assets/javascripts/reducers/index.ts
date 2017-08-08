import { combineReducers } from 'redux';
import auth_token from './auth_token';
import current_user from './current_user';
import layout_state from './layout_state';
import alert from './alert';
import users from './users';
import next_location from './next_location'

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

export type Alert = {
  message?:string;
  type?:string;
  is_show:boolean;
}

export type NextLocation = {
  pathname?:string
} 

export type State = {
  current_user?:currentUser;
  users:Array<User> 
  auth_token:AuthToken; 
  alert:Alert;
  layout_state:LayoutState; 
  next_location:NextLocation;
}

const reducer = combineReducers({
  current_user, 
  users, 
  next_location,
  auth_token, 
  layout_state, 
  alert
})
export default reducer;
