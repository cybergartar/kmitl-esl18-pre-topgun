'use strict';

module.exports = function(Alert) {
  Alert.status = function(callback) {
    Alert.findOne({order: 'timestamp DESC'}, function(err, model) {
      callback(null, model);
    });
  }

  Alert.remoteMethod(
    'status', {
      http: {
        path: '/status',
        verb: 'get'
      },
      returns: {
        arg: 'status',
        type: 'string'
      }
    }
  )
};
