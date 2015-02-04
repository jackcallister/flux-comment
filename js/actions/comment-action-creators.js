var CommentAppDispatcher = require('../dispatcher/comment-app-dispatcher');
var CommentAppConstants = require('../constants/comment-app-constants');
var CommentStore = require('../stores/comment-store');

var ActionTypes = CommentAppConstants.ActionTypes;

module.exports = {

  createComment: function(comment) {
    CommentAppDispatcher.handleViewAction({
      type: ActionTypes.CREATE_COMMENT,
      comment: comment
    });
  }
};
