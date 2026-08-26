// Import Router from Express to create user-related routes (48)
import { Router } from "express";

// Import the middleware that protects routes using JWT verification (49)
import {authenticateUser} from "../middlewares/auth.middelware.js";

// Import the controllers that handle each user-related request (50)
import {
    registerController,
    loginController,
    getUserController
} from "../controllers/user.controller.js";

// Create a new Express Router instance (51)
const userRouter = Router();

// Run registerController when a POST request is sent to /register (52)
userRouter.post('/register', registerController);

// Run loginController when a GET request is sent to /login (53)
userRouter.get('/login', loginController);

// First authenticate the user, then run getUserController for /user (54)
userRouter.get('/user', authenticateUser, getUserController);

// Export the router so app.js can connect it to the main application (55)
export default userRouter;