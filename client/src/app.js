var React = require('react');
var ReactDOM = require('react-dom');

var ItunesContainer = require('./containers/ItunesContainer');

window.onload = function(){
  ReactDOM.render(
    <ItunesContainer />,
    document.getElementById('app')
  );
}