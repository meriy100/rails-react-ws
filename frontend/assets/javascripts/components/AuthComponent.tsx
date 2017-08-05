import * as React from 'react';
import {currentUser} from '../reducers'

import {
  Route, 
  Redirect
} from 'react-router-dom'

interface Props {
  current_user:currentUser;
  handleLoginCheck:any;
}

export default class AuthComponent extends React.Component<Props, {}> {

  componentDidMount() {
    this.userWillTransfer(this.props);
  }

  // componentWillMount() {
  //   this.userWillTransfer(this.props);
  // }

  componentWillUpdate(nextProps:any) {
    this.userWillTransfer(this.props);
  }

  userWillTransfer(props:Props) {
    if(this.props.current_user.email === "") {
      props.handleLoginCheck();
    }
  }

  render() {
    return (
      this.props.current_user.email !== "" ? (
        <Route children={this.props.children} />
      ) : (
        <Redirect to={'/login'} />
      )
    )
  }
}