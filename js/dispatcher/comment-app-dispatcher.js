var CommentAppConstants = require('../constants/comment-app-constants');
var PayloadSources = CommentAppConstants.PayloadSources;

var Dispatcher = require('flux').Dispatcher;

var CommentAppDispatcher = Object.assign(new Dispatcher(), {

  handleViewAction: function(action) {
    this.dispatch({
      source: PayloadSources.VIEW_ACTION,
      action: action
    });
  }
});

module.exports = CommentAppDispatcher;
