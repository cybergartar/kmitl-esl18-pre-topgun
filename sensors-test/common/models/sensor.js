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

  Sensor.place = function(place, callback) {
    Sensor.find({where: {"tag": place}}, function(err, models) {
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
        arg: 'place',
        type: 'string'
      },
      returns: {
        root: true,
        type: 'string'
      }
    }
  )
};
