import * as React from "react";
import { currentUser } from '../reducers'

import { Route, Link, Redirect} from 'react-router-dom'

import MyAwesomeReactComponent from './MyAwesomeReactComponent';



const Home = () => (
  <div>
    <MyAwesomeReactComponent content="hello" />
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

interface Props {
  current_user: currentUser;
  handleLoginCheck: any;
  handleLogout: any;
}

export default class AppComponent extends React.Component<Props, {}> {

  constructor(props:Props) {
    super(props)
    let { handleLoginCheck } = props
    handleLoginCheck()
  }


  render() {
    if (this.props.current_user.email !== "") {
      return (
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/topics">Topics</Link></li>
            <button onClick={() => this.props.handleLogout()}>logout</button>
          </ul>
          <hr/>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
        </div>
      )
    } else {
      return (
        <Redirect to={{
          pathname: '/login'
        }}/>
      );
    }
  }
}
