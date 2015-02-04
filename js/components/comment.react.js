var CommentActionCreators = require('../actions/comment-action-creators');

var React = require('react');

var Comment = React.createClass({

  render: function() {
    return (
      <div className='comment'>
        Author: {this.props.comment.author}
        Body: {this.props.comment.text}
      </div>
    );
  }
});

module.exports = Comment;