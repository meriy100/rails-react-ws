export const setErrorHandler= (message:string) => {
  return { type: 'SET_ERROR_HANDLER', error: { message: message, is_show: true } }
}