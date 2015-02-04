var CommentAppConstants = require('../constants/comment-app-constants');
var PayloadSources = CommentAppConstants.PayloadSources;

var assign = require('object-assign');
var Dispatcher = require('flux').Dispatcher;

var CommentAppDispatcher = assign(new Dispatcher(), {

  handleViewAction: function(action) {
    this.dispatch({
      source: PayloadSources.VIEW_ACTION,
      action: action
    });
  }
});

module.exports = CommentAppDispatcher;
