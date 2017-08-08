import * as React from 'react';
import { Link } from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

import { LayoutState } from '../../reducers'



interface Props {
  layout_state: LayoutState;
  handleSetLayoutState: any;
}

export default class DrawerComponent extends React.Component<Props, any> {
  render() {
    return (
      <Drawer open={ this.props.layout_state.is_drawer_open } > 
        <AppBar
          iconElementLeft={<IconButton onClick={ () => { this.props.handleSetLayoutState({ is_drawer_open: false }) } }><NavigationClose /></IconButton>}
        />
        <Link to={'/users'}><MenuItem onClick={() => this.props.handleSetLayoutState({ is_drawer_open: false }) }>Users</MenuItem></Link>
        <MenuItem>Menu Item 2</MenuItem>
      </Drawer>
    );
  }
}