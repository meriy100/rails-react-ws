import { AnyAction } from 'redux'
import * as Actions from '../actions'
import { ErrorHandler } from './'

const initial = {
  message: "",
  is_show: false,
}
export const error_handler = (state = initial, action:AnyAction):ErrorHandler => {
  switch(action.type) {
    case Actions.SET_ERROR_HANDLER:
      return action.error;
    default:
      return state;
  }
}
