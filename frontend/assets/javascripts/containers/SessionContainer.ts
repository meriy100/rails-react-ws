import { connect } from 'react-redux'
import LoginComponent from '../components/LoginComponent';

import { sessionCreate, sessionDestory } from '../actions/current_user'

const mapStateToProps = (state:any) => {
  return {
    current_user: state.current_user,
  }
}

const mapDispatchToProps = (dispatch:any) => {
  return {
    handleLogin: (user:{}) => { sessionCreate(user)(dispatch) },
    handleLogout: () => { sessionDestory()(dispatch) },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent);

