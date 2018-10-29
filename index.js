require('babel-register');
require('./server');

// var app = require('express')();
// var http = require('http').Server(app);
// var io = require('socket.io')(http);

// // app.get('/', function (req, res) {
// //     res.sendFile(__dirname + '/index.html');
// // });
// var users=[];
// io.on('connection', function (socket) {
//     console.log('a user connected ' + socket.id,);
//     socket.on('disconnect',()=>{
//         console.log(socket.id +" is dicconnected")
//     })
//     socket.on("addToSever",(name)=>{
//         console.log(name)
//         socket.join(name.email);
//     })
//     socket.on("sendMessage",(data)=>{
//         console.log(data)
//         io.sockets.in(data.email).emit('new_msg', data.msg);
//     })
// });

// http.listen(3231, function () {
//     console.log('listening on *:3231');
// });