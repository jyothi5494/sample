/**
 * Created by Jyothi on 7/11/16.
 */

var path = require('path');
var rootPath = path.normalize(__dirname + '/../..');
module.exports = {
  root: rootPath,
  mongoDB_uri: 'mongodb://localhost:27017/at4p-dev',
  port: 9000,
  serverURL: "http://localhost:9000",
  html: 'public',
  timeZone: 'Asia/Calcutta'
};
