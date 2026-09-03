// Import Express to create the application (1)
import express from 'express';

// Import the Node-ID3 router containing all song-related routes (2)
import nodeid3Router from './routes/nodeid3.route.js';

// Create the Express application (3)
const app = express();

// Middleware to parse incoming JSON request bodies (4)
app.use(express.json());

// Mount the Node-ID3 router under the /api path (5)
// All routes inside nodeid3Router will now start with /api
app.use('/api', nodeid3Router);

// Export the app so server.js can start the server (6)
export default app;