var CommentApp = require('./components/comment-app.react');
var React = require('react');

window.React = React; // export for http://fb.me/react-devtools

React.render(
    <CommentApp />,
    document.getElementById('react')
);
