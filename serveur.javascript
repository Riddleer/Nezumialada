const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('chatMessage', (message) => {
        console.log('Message received:', message);
        io.emit('message', message);
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
// Modifiez votre code JavaScript client pour se connecter au serveur Socket.IO
const socket = io();

// Reste du code pour envoyer et recevoir des messages
