// Import Express so we can create the Express application (56)
import express from "express";

// Import cookie-parser so Express can read cookies from incoming requests (57)
import cookieParser from "cookie-parser";

// Import the user router containing all user-related APIs (58)
import userRouter from "./routes/user.route.js";

// Create an instance of the Express application (59)
const app = express();

// Allow Express to read JSON data from incoming requests (60)
app.use(express.json());

// Allow Express to read and parse cookies from incoming requests (61)
app.use(cookieParser());

// Connect all user routes to the /api base route (62)
app.use('/api', userRouter);

// Export the configured Express application so server.js can start it (63)
export default app;