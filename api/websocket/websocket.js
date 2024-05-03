

export const webSocket = (io) => {
    io.on('connection', (socket) => {
        console.log('a user is connected', socket.id);
    
        socket.on("message", message => {
            const messageWithTimestamp = {
                ...message,
                user: socket.id,
                timestamp: new Date().toLocaleTimeString()
            };
              
            // socket.emit("receive-message", messageWithTimestamp);
    
            socket.broadcast.emit("receive-message", messageWithTimestamp);
        });
    
        socket.on('disconnect', () => {
            console.log('user disconnected', socket.id);
        });
    });
}
