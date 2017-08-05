import { Redirect} from 'react-router-dom'
import * as React from "react";
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import Snackbar from 'material-ui/Snackbar';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';


import { ErrorHandler } from '../reducers/error_handler'
import { currentUser } from '../reducers'

interface Props {
  current_user: currentUser;
  error_handler: ErrorHandler;
  handleLogin: any;
}

interface State {
  email:string;
  password:string;
}

export default class LoginComponent extends React.Component<Props, State> {

  constructor(props:Props) {
    super(props)
    this.state = {
      email: "",
      password: "",
    };
  }

  handleEmailChange = (event:any, value:string) => {
    this.setState({email: value})
  }

  handlePasswordChange = (event:any, value:string) => {
    this.setState({password: value})
  }

  render() {
    let cardStyle = {
      "marginLeft": "auto",
      "marginRight": "auto",
      "marginTop": "48px",
      "width": "480px"
    }
    console.log(this.props.current_user.email)
    return (
      this.props.current_user.email === "" ? (
        <Card style={cardStyle}>
          <CardTitle title="Card title" subtitle="Card subtitle" />
          <CardText>
            <TextField
              hintText="Hint Text"
              floatingLabelText="Fixed Floating Label Text"
              floatingLabelFixed={true}
              value={this.state.email}
              onChange={this.handleEmailChange} />
              <br />
          <TextField
            hintText="Password Field"
            floatingLabelText="Password"
            type="password"
            value={this.state.password}
            onChange={this.handlePasswordChange} />
          </CardText>
          <CardActions>
            <FlatButton label="Login" onClick={() => this.props.handleLogin({email: this.state.email, password: this.state.password})}/>
          </CardActions>
          <Snackbar
                    open={this.props.error_handler.is_show}
                    message={this.props.error_handler.message}
                    autoHideDuration={4000}
                  />
        </Card>
      ) : (
        <Redirect to={'/'} />
      )
    ) 
  }
}


                      {/*onRequestClose={this.handleRequestClose}*/}