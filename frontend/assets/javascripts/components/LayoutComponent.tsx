import * as React from 'react';
import { Route } from 'react-router-dom'

import HeaderContainer from '../containers/HeaderContainer'
import DrawerContainer from '../containers/DrawerContainer'
import AlertNotificationContainer from '../containers/AlertNotificationContainer'

export default class LayoutComponent extends React.Component<any, {}>  {
  render() {
    const layoutBodyStayle = {
      marginTop: '48px',
    }
    return (
      <div>
        <HeaderContainer />
        <DrawerContainer />
        <AlertNotificationContainer />
        <div className="container" style={layoutBodyStayle}>
          <Route children={this.props.children} />
        </div>
      </div>
    )
  }
}
