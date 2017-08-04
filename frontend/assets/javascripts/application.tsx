import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


// Middleware
import createLogger from 'redux-logger';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './components/MyAwesomeReactComponent';
import reducer from './reducers'

injectTapEventPlugin();
const loggerMiddleware = (createLogger as any)();

let store = createStore(reducer,
  applyMiddleware(loggerMiddleware)
)

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

const App = () => (
  <Provider store={store}>
    <Router>
      <MuiThemeProvider>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/topics">Topics</Link></li>
          </ul>
          <hr/>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
        </div>
      </MuiThemeProvider>
    </Router>
  </Provider>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

//import React from 'react'
//import { render } from 'react-dom'
//import { Provider } from 'react-redux'
//import { createStore, applyMiddleware } from 'redux'
//import { Router, Route, Link, browserHistory } from 'react-router'
//
//// Middleware
//import createLogger from 'redux-logger';
//
//
//let store = createStore(appStrore,
//  applyMiddleware(createLogger())
//)
//
//ReactDOM.render(
//  <Provider store={store}>
//    <Router history={browserHistory}>
//      <Route path="/" component={App}>
//        <Route path="/posts" component={Posts}></Route>
//        <Route path="/posts/new" component={PostEditorMaster}></Route>
//        <Route path="/posts/:id" component={Post}></Route>
//        <Route path="/posts/:id/edit" component={PostEditorMaster}></Route>
//        <Route path="/play_room" component={PlayRoom}></Route>
//      </Route>
//      <Route path="*" component={App}/>
//    </Router>
//  </Provider>,
//  document.getElementById('root')
//)
//
