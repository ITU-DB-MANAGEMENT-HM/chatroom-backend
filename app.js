var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
http.listen(5000, function(){
    console.log("it is working on 5000");
}
);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

var usernames = {};

io.on('connection', function(socket){


    socket.on('sendchat', function(msg){
    io.sockets.emit('updatechat', socket.username, msg);
    });

    socket.on('adduser', function(username){
        socket.username = username;
        usernames[username] = username;

        socket.emit('updatechat', 'SERVER', 'connected to chatroom');
        //console.log(io.sockets);
        socket.broadcast.emit('updatechat', 'SERVER', username+' is connected');
        
        io.sockets.emit('updateusers', usernames);



    });

    socket.on('disconnect', function(){
            delete usernames[socket.username];
            io.sockets.emit('updateusers', usernames);
            socket.broadcast.emit('updatechat', 'SERVER', socket.username+' has left the room');
        }
    );
});