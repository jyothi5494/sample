/**
 * Created by Jyothi on 7/11/16.
 */

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var config = require('./config');
var cors = require('cors');

// logger for keeping logs in a file

module.exports = function (app) {

  app.set('views', config.root + '/app/views');
  app.set('view engine', 'jade');

  // basic stuff
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(cors());
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, config.html)));

};
