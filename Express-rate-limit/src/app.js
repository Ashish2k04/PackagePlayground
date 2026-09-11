// Import Express to create the application (1)
import express from "express";

// Import the authentication router containing the login route (2)
import appRouter from "./routes/auth.route.js";

// Create the Express application (3)
const app = express();

// Middleware to parse incoming JSON request bodies (4)
app.use(express.json());

// Mount the authentication router under the /api path (5)
// The login endpoint will therefore be available at /api/login
app.use('/api', appRouter);

// Export the app so server.js can start the server (6)
export default app;