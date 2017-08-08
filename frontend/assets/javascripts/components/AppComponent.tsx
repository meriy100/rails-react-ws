import * as React from "react";
import { Route } from 'react-router-dom'


export default class AppComponent extends React.Component<any, any> {

  render() {
    return (
      <div>
        <Route children={this.props.children} />
      </div>
    )
  }
}
