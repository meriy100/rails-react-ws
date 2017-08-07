import * as React from 'react';
import * as Reducers from '../reducers'
import ApiChannel from '../lib/ApiChannel';

interface Props {
  users: Array<Reducers.User>;
}

export default class UsersComponent extends React.Component<Props, any> {
  componentDidMount() {
    ApiChannel.perform('get', {});     
  }
  render() {
    return ( 
      <div>
        <h1>Users</h1>
        <ul>
          { this.props.users.map(user =>  
            <li key={user.email}>{user.email}</li> 
          ) } 
        </ul>
      </div>
    );
  }
}