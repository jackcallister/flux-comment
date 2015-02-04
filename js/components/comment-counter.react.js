var CommentStore = require('../stores/comment-store');

var React = require('react');

function getStateFromStore() {
  return {
    count: CommentStore.getAll().length
  }
}

var CommentCounter = React.createClass({

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
    return (
      <h1>{this.state.count}</h1>
    );
  },

  _onChange: function() {
    this.setState(getStateFromStore());
  }
});

module.exports = CommentCounter;
