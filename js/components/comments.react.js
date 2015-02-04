var CommentStore = require('../stores/comment-store');
var Comment = require('../components/comment.react');

var React = require('react');

function getStateFromStores() {
  return {
    comments: CommentStore.getAll()
  }
}

var Comments = React.createClass({

  getInitialState: function() {
    return getStateFromStores();
  },

  componentDidMount: function() {
    CommentStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    CommentStore.removeChangeListener(this._onChange);
  },

  render: function() {
    var comments = this.state.comments.map(function(comment) {
      return <Comment key={comment.id} comment={comment} />
    });

    return (
      <div className='comments'>
        {comments}
      </div>
    );
  },

  _onChange: function() {
    this.setState(getStateFromStores());
  }
});

module.exports = Comments;