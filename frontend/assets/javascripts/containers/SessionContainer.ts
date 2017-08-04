import { connect } from 'react-redux'
import LoginComponent from '../components/LoginComponent';

import { setCurrentUser } from '../actions/current_user'

const mapStateToProps = (state:any) => {
  return {
    current_user: state.current_user,
  }
}

const mapDispatchToProps = (dispatch:any) => {
  return {
    handleSetCurrentUser: () => { dispatch(setCurrentUser()) },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent);

