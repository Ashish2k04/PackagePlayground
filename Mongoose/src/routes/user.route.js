// Import Router from Express so we can create user-related routes (44)
import { Router } from "express";

// Import both controller functions that will handle register and login requests (45)
import {registerController, loginController} from "../controllers/user.controller.js";

// Create an Express Router instance (46)
const userRouter = Router();

// When a POST request comes to "/register", run registerController (47)
userRouter.post('/register', registerController);

// When a GET request comes to "/login", run loginController (48)
userRouter.get('/login', loginController);

// Export the router so app.js can import and connect it to "/api" (2)
export default userRouter;