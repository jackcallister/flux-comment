var CommentAppDispatcher = require('../dispatcher/comment-app-dispatcher');
var ChatConstants = require('../constants/comment-app-constants');
var ActionTypes = ChatConstants.ActionTypes;

var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';
var _comments = [];

var CommentStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getAll: function() {
    return _comments;
  }
});

CommentStore.dispatchToken = CommentAppDispatcher.register(function(payload) {
  var action = payload.action;

  console.log(action.type);
  
  switch(action.type) {

    case ActionTypes.CREATE_COMMENT:
      _comments.push(action.comment);
      CommentStore.emitChange();
      break;

    default:
  }
});

module.exports = CommentStore;
