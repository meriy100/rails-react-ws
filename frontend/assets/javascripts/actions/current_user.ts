import { setErrorHandler } from './error_handler'
import {currentUser} from './../reducers'
import axiosHelper from '../lib/axiosHelper';
const SET_CURRENT_USER = 'SET_CURRENT_USER';

export const setCurrentUser = (user:currentUser) => {
  return { type: SET_CURRENT_USER, payload: user }
}

export const sessionGet = () => {
  return (dispatch:any) => {
    return axiosHelper.get(`/api/session`).then((response) => {
      dispatch(setCurrentUser(response.data))
    }).catch((error) => {
      console.log(error.response.data.message)
      dispatch(setCurrentUser({email: ""}))
    })
  }
}

export const sessionCreate = (params = {}) => {
  return (dispatch:any) => {
    return axiosHelper.post(`/api/session`, {user: params}).then((response) => {
      dispatch(setCurrentUser(response.data));
    }).catch((error) => {
       dispatch(setErrorHandler(error.response.data.message));
    })
  }
}

export const sessionDestroy = () => {
  return (dispatch:any) => {
    return axiosHelper.delete('/api/session').then((response) => {
      dispatch(setCurrentUser({email: ""}));
    }).catch((response) => {
      console.log(response);
      dispatch(setErrorHandler(response.data.message));
    })
  }
}

