export type ErrorHandler = {
  message : string;
  is_show : boolean;
}; 

const initial = {
  message: "",
  is_show: false,
}
export const error_handler = (state = initial, action:any):ErrorHandler => {
  switch(action.type) {
    case "SET_ERROR_HANDLER":
      return action.error;
    default:
      return state;
  }
}
