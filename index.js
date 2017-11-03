// var app = require('express')();
// var http = require('http').Server(app);
// var io = require('socket.io')(http);
// 
// app.get('/', function(req, res){
//     res.sendFile(__dirname + '/index.html');
// });
// 
// io.on('connection', function(socket){
//     console.log("user connected");
//     socket.on('disconnect', function() {
//         console.log("user disconnected");
//     });
//     socket.on('chat msg', function(msg){
//         console.log(msg);
//         io.emit("chat msg", msg);
//     });
//     
// });
// 
// 
// http.listen(5000, function(){
//     console.log("it is working on 5000");
// }
// );
