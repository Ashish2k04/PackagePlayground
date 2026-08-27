// Import Express so we can create an Express application (1)
import express from 'express';

// Import CORS middleware to control cross-origin requests (2)
import cors from 'cors';

// Create an instance of the Express application (3)
const app = express();

// Allow Express to read JSON data sent in incoming requests (4)
app.use(express.json());

// Configure and enable CORS middleware (5)
app.use(cors({

    // Allow requests coming from this frontend origin (6)
    origin: "http://localhost:5173/",

    // Allow credentials such as cookies to be sent with requests (7)
    credentials: true
}));

// Export the configured Express application so server.js can start it (8)
export default app;