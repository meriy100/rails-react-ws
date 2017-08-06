import * as React from 'react';
import { Route } from 'react-router-dom'

import HeaderContainer from '../containers/HeaderContainer'
import DrawerContainer from '../containers/DrawerContainer'

export default class LayoutComponent extends React.Component<any, {}>  {
  render() {
    return (
      <div>
        <HeaderContainer />
        <DrawerContainer />
        <Route children={this.props.children} />
      </div>
    )
  }
}
