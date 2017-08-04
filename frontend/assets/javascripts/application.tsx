import * as React from 'react';
import * as ReactDOM from 'react-dom';

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello, world! I am a CommentBox.
      </div>
    );
  }
});
ReactDOM.render(
  <CommentBox />,
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
