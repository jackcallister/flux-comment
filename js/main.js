require("6to5/polyfill");

var App = require('./components/app.react');
var React = require('react');

window.React = React; // export for http://fb.me/react-devtools

React.render(<App />, document.getElementById('app'));
