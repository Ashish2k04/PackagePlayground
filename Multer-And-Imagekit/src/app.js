// Import Express so we can create an Express application (8)
import express from 'express';

// Import the upload route so we can connect it to our application (9)
import uploadRoute from './routes/upload.route.js';

// Create an instance of the Express application (10)
const app = express();

// Allow Express to read JSON data from incoming requests (11)
app.use(express.json());

// Connect the upload routes with the "/api" base route (12)
// Example: "/upload" becomes "/api/upload"
app.use('/api', uploadRoute);

// Export the configured Express application so server.js can start it (4)
export default app;