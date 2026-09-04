// Import Express so we can create an Express application (1)
import express from 'express';

// Import exampleRouter so we can connect its routes to our main Express app (2)
import exampleRouter from './routes/example.route.js';

// Create an instance of the Express application (3)
const app = express();

// Add middleware to parse incoming JSON data (4)
app.use(express.json());

// Connect exampleRouter with the "/api" base route (5)
// So the route "/example" will become "/api/example"
app.use('/api', exampleRouter);

// Export the Express app so we can import and run it in server.js (6)
export default app;