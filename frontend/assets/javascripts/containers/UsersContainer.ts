import { connect } from 'react-redux'
import UsersComponent from '../components/UsersComponent'


const mapStateToProps = (state:any) => {
  return {
    users: state.users
  }
}

const mapDispatchToProps = (dispatch:any) => {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersComponent);