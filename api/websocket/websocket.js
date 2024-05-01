import http from 'http';
import express from 'express';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

io.on('connection', (socket) => {
    console.log('a user is connected', socket.id);

    socket.on("message", message => {
        const userMessage = { ...message, user: socket.id };
        socket.broadcast.emit("receive-message", userMessage);
        console.log(userMessage);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected', socket.id);
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});
