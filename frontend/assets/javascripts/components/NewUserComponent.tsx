import * as React from 'react';

import * as Reducers from '../reducers'

import TextField from 'material-ui/TextField';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';

import { RaisedButton } from 'material-ui'


import ApiChannel from '../lib/ApiChannel';

interface Props {
  user: Reducers.User;
  history:any; 
}

const initialze = {
  email: '',
  name: '',
}

export default class NewUserComponent extends React.Component<Props, any> {
  constructor() {
    super();
    this.state = { user: initialze }
  }

  handleField (event:any, value:string, field:string) {
    let nextField:any =  this.state.user;
    nextField[field] = value;
    this.setState( { user: Object.assign( this.state.user, nextField ) } )
  }

  handleSubmit (event:any) {
    event.preventDefault();
    ApiChannel.perform('action', { resource: "users", method: "create", user: this.state.user });     
    this.props.history.push('/users');
  }

  render() {
    return ( 
      <div>
        <Card>
          <CardTitle>
            <h1>New Users</h1>
          </CardTitle>
          <form onSubmit={(event) => this.handleSubmit(event)} >
            <CardText>
              <TextField
                hintText="email"
                value={this.state.user.email}
                onChange={ (event:any, value:string) => this.handleField(event, value, 'email')} 
                floatingLabelText=""
                floatingLabelFixed={true} />
              <br />
              <TextField
                hintText="name"
                value={this.state.user.name}
                onChange={ (event:any, value:string) => this.handleField(event, value, 'name')} 
                floatingLabelText=""
                floatingLabelFixed={true} />
            </CardText>
            <CardActions>
              <RaisedButton label="Create" type="submit" />
            </CardActions>
          </form>
        </Card>
      </div>
    );
  }
}