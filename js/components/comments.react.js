var CommentStore = require('../stores/comment-store');
var Comment = require('../components/comment.react');

var React = require('react');

function getStateFromStore() {
  return {
    comments: CommentStore.getAll()
  }
}

var Comments = React.createClass({

  getInitialState: function() {
    return getStateFromStore();
  },

  componentDidMount: function() {
    CommentStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    CommentStore.removeChangeListener(this._onChange);
  },

  render: function() {
    var comments = this.state.comments.map(function(comment, index) {
      return <Comment key={'comment-' + index} comment={comment} />
    });

    return (
      <div className='comments'>
        {comments}
      </div>
    );
  },

  _onChange: function() {
    this.setState(getStateFromStore());
  }
});

module.exports = Comments;
