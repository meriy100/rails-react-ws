import * as React from 'react';
import { Route } from 'react-router-dom'

import HeaderContainer from '../containers/HeaderContainer'

export default class LayoutComponent extends React.Component<any, {}>  {
  render() {
    return (
      <div>
        <HeaderContainer />
        <Route children={this.props.children} />
      </div>
    )
  }
}
