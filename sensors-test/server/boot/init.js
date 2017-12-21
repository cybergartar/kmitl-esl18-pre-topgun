// 'use strict';
// var util = require('util');

// module.exports = (app) => {
//   let modelName = app.models.sensor;

//   app.dataSources.mongodb.connector.automigrate(function(err) {
//     if (err) throw err;
//     console.log('Starting automigrate');

//     modelName.create([{
//       tag: 'forest',
//       value: 1.234,
//       timestamp: Date(),
//     }, {
//       tag: 'forest',
//       value: 1.225,
//       timestamp: Date(),
//     }, {
//       tag: 'waterfall',
//       value: 1.116,
//       timestamp: Date(),
//     }], function(err, result) {
//       if (err) throw err;
//       console.log('\nCreated instances of sensor ' + util.inspect(result, 3));
//       modelName.find({where: {tag: {inq: ['forest']}}}, function(err, result) {
//         if (err) throw err;
//         console.log('\nFound instance with inq: ' + util.inspect(result, 2));
//       });
//     });
//   });
// };
