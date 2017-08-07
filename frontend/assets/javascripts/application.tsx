import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import UsersContainer from './containers/UsersContainer'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'


// Middleware
import createLogger from 'redux-logger';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppComponent from './components/AppComponent'
import AuthContainer from './containers/AuthContainer'
import LoginContainer from './containers/LoginContainer'
import LayoutComponent from './components/LayoutComponent'

import reducer from './reducers'


injectTapEventPlugin();
const loggerMiddleware = (createLogger as any)();

let store = createStore(reducer,
  applyMiddleware(loggerMiddleware)
)

export const dispatch = store.dispatch;

const Sample = () => ( <div></div>)

const App = () => (
  <Provider store={store}>
    <Router>
      <MuiThemeProvider>
        <AppComponent>
          <Switch>
            <Route exact path='/login' component={LoginContainer} />
            <AuthContainer>
              <LayoutComponent>
                <Switch>
                  <Route path="/users" component={UsersContainer} /> 
                  <Route path="/" component={Sample} />
                </Switch>
              </LayoutComponent>
            </AuthContainer>
          </Switch>
        </AppComponent>
      </MuiThemeProvider>
    </Router>
  </Provider>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
