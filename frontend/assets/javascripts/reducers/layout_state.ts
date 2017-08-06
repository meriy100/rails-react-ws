import { AnyAction } from 'redux';
import { LayoutState } from './'
import * as Actions from '../actions';

const initial:LayoutState = {
  is_drawer_open: false,
}

export default (state = initial, action:AnyAction):LayoutState => {
  switch(action.type) {
    case Actions.SET_LAYOUT_STATE:
      return action.payload;
    default:
      return state;
  }
}
