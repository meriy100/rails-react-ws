import { connect } from 'react-redux'
import HeaderComponent from '../components/HeaderComponent'

import { sessionDestroy } from '../actions/current_user'

const mapStateToProps = (state:any) => {
  return {
    current_user: state.current_user,
  }
}

const mapDispatchToProps = (dispatch:any) => {
  return {
    handleLogout: () => { sessionDestroy()(dispatch) },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderComponent);