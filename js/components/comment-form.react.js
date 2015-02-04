var CommentActionCreators = require('../actions/comment-action-creators');

var React = require('react');

var CommentForm = React.createClass({

  render: function() {
    return (
      <div className='comment-form'>
        <h1>CommentForm</h1>
        <textarea ref='text' />
        <button onClick={this._onSubmit}>Submit</button>
      </div>
    );
  },

  _onSubmit: function(e) {
    var textNode = this.refs.text.getDOMNode();
    var text = this.refs.text.getDOMNode().value;

    if (text != '') {
      CommentActionCreators.createComment({
        text: text
      });

      textNode.value = '';
    }
  }
});

module.exports = CommentForm;
