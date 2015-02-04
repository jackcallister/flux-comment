var CommentActionCreators = require('../actions/comment-action-creators');

var React = require('react');

var CommentForm = React.createClass({

  getInitialState: function() {
    return {
      value: '' 
    };
  },

  render: function() {
    return (
      <div className='comment-form'>
        <h1>CommentForm</h1>
        <textarea value={this.state.value} onChange={this._onChange} />
        <button onClick={this._onClick}>Submit</button>
      </div>
    );
  },

  _onChange: function(e) {
    this.setState({
      value: e.target.value
    });
  },

  _onClick: function(e) {
    if (this.state.value != '') {
      CommentActionCreators.createComment({
        id: 2,
        author: 'Current Author',
        text: this.state.value
      });

      this.setState({ value: '' });
    }
  }
});

module.exports = CommentForm;
