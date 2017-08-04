import * as React from "react";
import { currentUser } from '../reducers'

interface Props {
  current_user: currentUser;
  handleSetCurrentUser: any;
}

export default class LoginComponent extends React.Component<Props, {}> {

  render() {
    return (
      <div>
        <p>score: {this.props.current_user.name}</p>
        <button onClick={() => this.props.handleSetCurrentUser()}>Decrement 2</button>
      </div>
    )
  }
}
