const express = require("express");
const app = express();
const http = require("http").Server(app);
const port = 3000;
const io = require("socket.io")(http);

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

io.on('connection', function(socket){
  socket.on('chat_message', function(data){
    console.log('name: ' + data.name); 
    console.log('message: ' + data.msg); 
    console.log('-----------'); 

  });
});

io.on('connection', function(socket){
  socket.on('chat_message', function(data){
    io.emit('chat_message', data);
  });
});

http.listen(port, () => {
  console.log(`Chating application listening at http://localhost:${port}`);
});
