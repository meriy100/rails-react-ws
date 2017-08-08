import * as React from 'react';
import * as Reducers from '../../reducers'
import { Card, CardTitle, CardText } from 'material-ui/Card';
import ApiChannel from '../../lib/ApiChannel';

interface Props {
  user?: Reducers.User;
}

export default class UserComponent extends React.Component<Props, any> {
  componentDidMount() {
    ApiChannel.perform('action', { resource: 'users', method: 'index' });     
  }

  render() {
    return (this.props.user === undefined ? <div/> :
      <Card style={{ marginBottom: '48px' }}>
        <CardTitle><h1>ユーザー詳細</h1></CardTitle>
        <CardText>
          { this.props.user.name }
        </CardText>
      </Card>
    );
  }
}