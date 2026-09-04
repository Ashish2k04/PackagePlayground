// Import Express to create the application (1)
import express from 'express';

// Import the Redis router containing all Redis-related routes (2)
import redisRouter from './routes/redis.route.js';

// Create the Express application (3)
const app = express();

// Middleware to parse incoming JSON request bodies (4)
app.use(express.json());

// Mount the Redis router under the /api path (5)
// All routes inside redisRouter will now start with /api
app.use('/api', redisRouter);

// Export the app so server.js can start the server (6)
export default app;