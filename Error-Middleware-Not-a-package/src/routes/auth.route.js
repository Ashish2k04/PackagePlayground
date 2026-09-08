// Import Router from Express to create a separate router (1)
import { Router } from "express";

// Import the controller that handles user registration (2)
import registerUserController from "../controllers/auth.controller.js";

// Create a new Express router (3)
const authRouter = Router();

// Create the register API route and connect it with the controller (4)
authRouter.post('/register', registerUserController);

// Export the router so it can be used in app.js (5)
export default authRouter;