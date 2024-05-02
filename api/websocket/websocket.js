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
    // console.log('a user is connected', socket.id);

    socket.on("message", message => {
        const messageWithTimestamp = {
            ...message,
            user: socket.id,
            timestamp: new Date().toLocaleTimeString()
        };
          
        socket.emit("receive-message", messageWithTimestamp);

        socket.broadcast.emit("receive-message", messageWithTimestamp);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected', socket.id);
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});
