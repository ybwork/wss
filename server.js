/*
  First console
  npm install -save socket.io
  npm install -save winston
  npm install -save file-system
  npm install -save ioredis
  
  Second console
  apt-get install php7.0-fpm
  apt-get install php7.0-dev
  git clone https://github.com/phpredis/phpredis.git
  cd phpredis
  phpize 
  ./configure 
  make && make install

  Third console
  cd etc/
  cd php/
  cd 7.0/
  cd fpm/
  cd conf.d
  nano 20-redis.ini
  extension=/home/admin/web/prometheus.inpk-trading.ru/public_html/libs/phpredis/modules/redis.so
  ctrl+o
  ctrl+x

  Four console
  cd phpredis
  cd tests
  php TestRedis.php

*/

console.log('Server has been started!');

var usersOnline = {};

// Redis = require('ioredis'),
// redis = new Redis({
//     port: 6379,
//     host: '127.0.0.1',
// });

var https = require('https');
var fs = require('fs');
var options = {
  key: fs.readFileSync('/etc/letsencrypt/live/prometheus.inpk-trading.ru/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/prometheus.inpk-trading.ru/cert.pem'),
  rejectUnauthorized: false
};
var server = https.createServer(options);
    server.listen(3001);
var io = require('socket.io')(server);

// redis.psubscribe('*', function(error, count) {});

// redis.on('pmessage', function(pattern, channel, data) {
//   data = JSON.parse(data);

//   if(data.event == 'message') {
//     var toId = data.data.message.conversation_id.split('|')[1];

//     for(var j in usersOnline) {
//       if(usersOnline[j].user_id == toId) {
//         var socketId = j;
//       }
//     }

//     if(socketId !== undefined) {
//       io.sockets.connected[socketId].emit('chat:message', data);
//     }
//   }
// });

io.sockets.on('connection', function(socket) {
  // var requestData = socket.request;
  console.log(socket.id);
  // var user_id = requestData._query['user_id'];
  // var user_name = requestData._query['user_name'];

  // usersOnline[socket.id] = {
  //   'user_id': user_id,
  //   'user_name': user_name,
  // }

  // io.emit('chat:online', usersOnline);

  // socket.on('disconnect', function() {
  //   // maybe try catch needed
  //   io.emit('chat:disconnect', {user_id: usersOnline[socket.id].user_id});
  //   delete usersOnline[socket.id];
  // });
});

// logger.remove(logger.transports.Console);
// logger.add(logger.transports.Console, {colorize: true, timestamp: true});
// logger.info('Socket work');


/***************************** HTTP Client ********************************************/

// console.log('Server has been started!');

// Redis = require('ioredis'),
// redis = new Redis({
//     port: 6379,
//     host: '127.0.0.1',
// });

// var http = require('http');
// var fs = require('fs');

// var server = http.createServer(options);
//     server.listen(3001);
// var io = require('socket.io')(server);

// redis.psubscribe('*', function(error, count) {});

// redis.on('pmessage', function(pattern, channel, data) {
//   data = JSON.parse(data);
// });

// io.sockets.on('connection', function(socket) {
//   var requestData = socket.request;
//   var textConnect = requestData._query['connect'];

//   io.emit('chat:online', 'hi');

//   socket.on('chat:test', function(data) {
//     console.log(data);
//   });
// });

/**************************************************************************************/

/***************************** HTTP Client ********************************************/

    // <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.3/socket.io.js"></script>

    // var socket = io(':3001', {query: "connect=" + 1, secure: true, rejectUnauthorized : false});

    // socket.on('chat:online', function (data) {
    //   console.log(data);
    // });

    // socket.emit('chat:test', 'fuck');

/**************************************************************************************/