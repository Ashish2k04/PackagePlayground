// Import Router from Express to create a separate router (1)
import {Router} from 'express';

// Import the login controller (2)
import loginController from '../controllers/auth.controller.js';

// Import the rate limiter middleware for the login route (3)
import { loginLimiter } from '../middlewares/rateLimit.middlware.js';

// Create a new Express router (4)
const appRouter = Router();

// Apply the rate limiter before the login controller (5)
// The request must pass loginLimiter before reaching loginController
appRouter.post('/login', loginLimiter, loginController);

// Export the router so it can be used in app.js (6)
export default appRouter;