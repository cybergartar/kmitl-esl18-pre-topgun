'use strict';

module.exports = function(Sensor) {
  Sensor.hello = function(msg, callback) {
    callback(null, "Hello " + msg);
  }

  Sensor.remoteMethod(
    'hello', { 
      http: {
        path: '/hello',
        verb: 'get'
      },
      accepts: {
        arg: 'msg',
        type: 'string'
      },
      returns: {
        arg: 'word',
        type: 'string'
      }
    }
  )

  Sensor.place = function(pl_name, callback) {
    Sensor.find({where: {"tag": pl_name}}, function(err, models) {
      callback(null, models);
    });
  }

  Sensor.remoteMethod(
    'place', {
      http: {
        path: '/place',
        verb: 'post'
      },
      accepts: {
        arg: 'pl_name',
        type: 'string'
      },
      returns: {
        arg: 'entry',
        type: 'array'
      }
    }
  )
};
