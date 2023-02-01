const express = require('express');
const bodyParser = require('body-parser');
const { Server } = require('socket.io');

const io = new Server({
  cors: true,
});
const app = express();

app.use(bodyParser.json());

//map - for telling which user in which room

const emailToSocketMapping = new Map();

io.on('connection', (socket) => {
  //Code for signalling
  //console.log('New Connection');
  socket.on('join-room', (data) => {
    const { emailId, roomId } = data;
    console.log('User ', emailId, 'Joined Room ', roomId);
    emailToSocketMapping.set(emailId, socket.id);
    socket.join(roomId);
    socket.broadcast.to(roomId).emit('user-joined', { emailId });
  });
});

app.listen(8000, (req, res) => {
  console.log('Http server running at port 8000');
});

io.listen(8001);
