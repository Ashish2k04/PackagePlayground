// Import Express so we can create an Express application (1)
import express from "express";

// Import userRouter so we can connect user-related routes to our main app (2)
import userRouter from "./routes/user.route.js";

// Create an instance of the Express application (3)
const app = express();

// Add middleware to read incoming JSON data and make it available in req.body (4)
app.use(express.json());

// Connect userRouter with the "/api" base route (5)
// Example: "/register" inside userRouter becomes "/api/register"
app.use('/api', userRouter);

// Export the configured Express app so server.js can import and start it (6)
export default app;