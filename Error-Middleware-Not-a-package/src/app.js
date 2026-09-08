// Import Express to create the application (1)
import express from 'express';

// Import the global error-handling middleware (2)
import { handleError } from './middlewares/error.middleware.js';

// Import the authentication router (3)
import authRouter from './routes/auth.route.js';

// Create the Express application (4)
const app = express();

// Middleware to parse incoming JSON request bodies (5)
app.use(express.json());

// Mount the authentication routes under the /api path (6)
app.use('/api', authRouter);

// Register the global error-handling middleware (7)
// Errors passed using next(error) will reach this middleware
app.use(handleError);

// Export the app so server.js can start the server (8)
export default app;