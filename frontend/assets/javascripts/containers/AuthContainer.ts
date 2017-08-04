import { connect } from 'react-redux'
import AuthComponent from '../components/AuthComponent';

import { sessionGet } from '../actions/current_user'

const mapStateToProps = (state:any) => {
  return {
    current_user: state.current_user,
  }
}

const mapDispatchToProps = (dispatch:any) => {
  return {
    handleLoginCheck: () => { sessionGet()(dispatch) },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthComponent);

