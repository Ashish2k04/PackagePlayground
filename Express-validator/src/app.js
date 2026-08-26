// Import Express so we can create an Express application (26)
import express from 'express';

// Import the authentication router (27)
import authRouter from './routes/auth.route.js';

// Create an instance of the Express application (28)
const app = express();

// Allow Express to read JSON data sent in incoming requests (29)
app.use(express.json());

// Connect authentication routes to the /api base route (30)
app.use('/api', authRouter);

// Export the configured Express application so server.js can start it (31)
export default app;