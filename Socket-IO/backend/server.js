import "dotenv/config";
import {createServer} from "http";
import app from './src/app.js';
import {initiateServer} from "./src/services/socket.service.js";

const httpServer = createServer(app);

initiateServer(httpServer);

const PORT = process.env.PORT || 8000;

httpServer.listen(3000, () => {
    console.log("Server is running on port 3000")
})


