import { connect } from 'react-redux'
import AppComponent from '../components/AppComponent';

import { sessionGet, sessionDestory } from '../actions/current_user'

const mapStateToProps = (state:any) => {
  return {
    current_user: state.current_user,
  }
}

const mapDispatchToProps = (dispatch:any) => {
  return {
    handleLoginCheck: () => { sessionGet()(dispatch) },
    handleLogout: () => { sessionDestory()(dispatch) },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppComponent);

