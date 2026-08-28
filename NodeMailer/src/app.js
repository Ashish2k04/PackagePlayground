// Import Express so we can create an Express application (1)
import express from 'express';

// Import the mail router so we can connect mail-related routes to our app (2)
import mailRouter from './routes/mail.route.js';

// Create an instance of the Express application (3)
const app = express();

// Allow Express to read JSON data sent in incoming requests (4)
app.use(express.json());

// Connect the mail router with the "/api" base route (5)
// Example: "/send-mail" becomes "/api/send-mail"
app.use('/api', mailRouter);

// Export the configured Express app so server.js can start it (6)
export default app;