import { connect } from 'react-redux'
import LoginComponent from '../components/LoginComponent';

import { sessionCreate } from '../actions/current_user'

const mapStateToProps = (state:any) => {
  return {
    current_user: state.current_user,
    error_handler: state.error_handler,
  }
}

const mapDispatchToProps = (dispatch:any) => {
  return {
    handleLogin: (user:{}) => { sessionCreate(user)(dispatch) },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent);

