var React = require('react');

var Comment = React.createClass({

  render: function() {
    return (
      <div className='comment'>
        Body: {this.props.comment.text}
      </div>
    );
  }
});

module.exports = Comment;