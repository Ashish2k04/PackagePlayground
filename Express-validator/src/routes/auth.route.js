// Import Router from Express to create authentication-related routes (16)
import { Router } from "express";

// Import the controller that handles user registration (17)
import { registerController } from "../controllers/auth.controller.js";

// Import the validation middleware for user data (18)
import { validateUser } from "../validations/auth.validator.js";

// Create a new Express Router instance (19)
const authRouter = Router();

// First validate the user data, then run the register controller (20)
authRouter.post('/register', validateUser, registerController);

// Export the router so app.js can use it (21)
export default authRouter;