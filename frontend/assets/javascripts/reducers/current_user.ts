import { currentUser } from './'
import * as Actions from '../actions'


const initial = {
  email: "",
}

export default (state = initial, action:any):currentUser => {
  switch(action.type) {
    case Actions.SET_CURRENT_USER:
      return action.payload;
    default:
      return state;
  }
}