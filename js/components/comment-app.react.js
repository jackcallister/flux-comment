var Comments = require('./comments.react');
var CommentForm = require('./comment-form.react');

var React = require('react');

var CommentApp = React.createClass({

  render: function() {
    return (
      <div className='comment-app'>
        <Comments />
        <CommentForm />
      </div>
    );
  }
});

module.exports = CommentApp;