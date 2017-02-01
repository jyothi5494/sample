/**
 * Created by Jyothi on 7/11/16.
 */

var myConfig = require('./config/config');

var express = require('express');
var app = express();

app.use('/', express.static('public'));
app.use('/', express.static('public/app'));

// app.use('/', express.static('public/dist'));

if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send({
      success: false,
      result: {
        error: err.message,
        message: err
      }
    });
  });
}

// application settings
require('./config/express')(app);

// routes
require('./config/routes')(app);

// database connection
require('./config/mongoose');

// error-handler settings
require('./config/error-handler')(app);

var port = myConfig.port;

/**
 * Start Express server.
 */
var server = app.listen(port, function () {
  console.log('App listening on port %d !', port);
});

var io = require('socket.io')(server);
io.on('connection', function (socket) {
  //console.log("socket connected, socket.id: ", socket.id);
  socket.on('disconnect', function () {
    console.log('disconnected');
    io.emit('user disconnected');
  });
  socket.emit('hello', { my: 'data' });
});

module.exports = {
  io: io
};
