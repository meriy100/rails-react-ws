import * as React from 'react';
import * as Reducers from '../reducers'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import { Link } from 'react-router-dom';

import RaisedButton from 'material-ui/RaisedButton';

import ApiChannel from '../lib/ApiChannel';

interface Props {
  users: Array<Reducers.User>;
}

export default class UsersComponent extends React.Component<Props, any> {
  componentDidMount() {
    ApiChannel.perform('get', {});     
  }

  handleDestroyUser(id:number) {
    ApiChannel.perform('action', { resource: 'users', method: 'destroy', id: id })
  }
  render() {
    return ( 
      <div>
        <h1>Users</h1>
        <Link to={'/users/new'}> <RaisedButton label="Create" /></Link>
        <Table>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false} >
            <TableRow >
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Email</TableHeaderColumn>
              <TableHeaderColumn>name</TableHeaderColumn>
              <TableHeaderColumn></TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody  displayRowCheckbox={false}>
            { this.props.users.map(user =>  
              <TableRow key={user.id}>
                <TableRowColumn>{user.id}</TableRowColumn>
                <TableRowColumn>{user.email}</TableRowColumn>
                <TableRowColumn>{user.name}</TableRowColumn>
                <TableRowColumn><RaisedButton label='destroy' secondary={true} onClick={() => { this.handleDestroyUser(user.id) } } /></TableRowColumn>
              </TableRow>
            ) } 
          </TableBody>
        </Table>
      </div>
    );
  }
}