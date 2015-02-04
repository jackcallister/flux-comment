var keyMirror = require('keymirror');

module.exports = {

  ActionTypes: keyMirror({
    CREATE_COMMENT: null
  }),

  PayloadSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  })
}
