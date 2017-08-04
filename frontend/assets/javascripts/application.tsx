import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'


// Middleware
import createLogger from 'redux-logger';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppContainer from './containers/AppContainer'

import reducer from './reducers'

import SessionContainer from './containers/SessionContainer';

injectTapEventPlugin();
const loggerMiddleware = (createLogger as any)();

let store = createStore(reducer,
  applyMiddleware(loggerMiddleware)
)

const App = () => (
  <Provider store={store}>
    <Router>
      <MuiThemeProvider>
          <div>
            <Route component={AppContainer}/>
            <Route path="/login" component={SessionContainer}/>
          </div>
      </MuiThemeProvider>
    </Router>
  </Provider>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
