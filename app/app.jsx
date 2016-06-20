
var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('Main');


// Create variable Route => route property 'react-router'
var {Route, Router, IndexRoute, hashHistory} = require('react-router'); // ES6 Destructuring Syntax
// EXAMPLE otherwise:
// var Route = require('react-router').Route;
// var Router = require('react-router').Router;
// var IndexRoute = require('react-router').IndexRoute;
// var hashHistory = require('react-router').hashHistory;

/*   OBJECT DESTRUCTURING
 *
 *  var obj = {
 *    name: 'Andrew'
 *  }
 *
 *  var {name} = obj;
 *
 *  // Creates new var 'name' equal to obj.name
 */

// (BASIC ROUTER CONFIG)
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>

    </Route>
  </Router>,
  document.getElementById('app')
);
