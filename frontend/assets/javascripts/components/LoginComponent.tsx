import * as React from "react";
import { Redirect} from 'react-router-dom'

import { currentUser } from '../reducers'

interface Props {
  current_user: currentUser;
  handleLogin: any;
  handleLogout: any;
}

export default class LoginComponent extends React.Component<Props, {}> {

  constructor(props:Props) {
    super(props)
  }


  render() {
    if (this.props.current_user.email === "") {
      return (
        <div>
          <p>score: {this.props.current_user.email}</p>
          <button onClick={() => this.props.handleLogin({email: "user1@example.com", password: 'password'})}>Decrement 2</button>
          <button onClick={() => this.props.handleLogout()}>logout</button>
        </div>
      )
    } else {
      return (
        <Redirect to={{
          pathname: '/'
        }}/>
      );
    }
  }
}
