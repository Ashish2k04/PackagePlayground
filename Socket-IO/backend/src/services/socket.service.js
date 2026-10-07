import {Server} from 'socket.io';

let io;

const initiateServer = (httpServer) => {
    io = new Server(httpServer,{
        cors: {
            origin: "http://localhost:5173",
            credentials: true
        }
    })

    console.log("Socketio server is running...")

    io.on('connect', (socket) => {
        console.log("A user is connected to the server" + socket.id)
    })
}

