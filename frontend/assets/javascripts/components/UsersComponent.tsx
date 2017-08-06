import * as React from 'react';
import * as Reducers from '../reducers'

interface Props {
  users: Array<Reducers.User>;
}

export default class UsersComponent extends React.Component<Props, any> {
  render() {
    let userList = this.props.users.map((user) => { <li>{user.email}</li> })
    return ( 
      <ul>{userList}</ul>
    );
  }
}