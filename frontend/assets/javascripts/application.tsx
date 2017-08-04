import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

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

const Sample = () => (
  <div>
    <p>ログインしたよー</p>
  </div>
)



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
