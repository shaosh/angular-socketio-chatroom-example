var express = require('express');
var app = module.exports = express();

var server = require('http').createServer(app);

// Hook Socket.io into Express
var io = require('socket.io').listen(server);

// Socket.io Communication
var socket = require('./scripts/socket.js');

io.sockets.on('connection', socket);

// Start server 外部访问 http://127.0.0.1:3000
server.listen(3000, function() {
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});