/**
 * Created by Jyothi on 7/11/16.
 */

var mongoose = require('mongoose');
var uri = require('./config').mongoDB_uri;
mongoose.Promise = require('bluebird');

var db = mongoose.connect(uri);
mongoose.connection.once('open', function callback() {
  console.log("DB connected " + uri)
});

// mongoose.set('debug', true);

mongoose.connection.on('open', function callback() {});

mongoose.connection.on('error', function () {
  setTimeout(function () {
    if (mongoose.connection.readyState === 0) {
      db = mongoose.connect(uri);
    }
  }, 1000);
});

mongoose.connection.on('disconnected', function () {
  setTimeout(function () {
    if (mongoose.connection.readyState === 0) {
      db = mongoose.connect(uri);
    }
  }, 1000);
});
