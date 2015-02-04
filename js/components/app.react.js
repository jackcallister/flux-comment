var Comments = require('./comments.react');
var CommentForm = require('./comment-form.react');
var CommentCounter = require('./comment-counter.react');

var React = require('react');

var App = React.createClass({

  render: function() {
    return (
      <div className='app'>
        <Comments />
        <CommentForm />
        <CommentCounter />
      </div>
    );
  }
});

module.exports = App;
