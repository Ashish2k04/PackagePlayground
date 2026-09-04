// Import Router from Express to create a separate router for Redis APIs (1)
import { Router } from "express";

// Import controller functions that handle Redis operations (2)
import { registerController, getEmailController, deleteUserController } from "../controllers/redis.controller.js";

// Create a new Express router for Redis routes (3)
const redisRouter = Router();

// Store user data in Redis (4)
redisRouter.post('/register', registerController);

// Retrieve user data from Redis using the username as the key (5)
redisRouter.post('/get-email', getEmailController);

// Delete user data from Redis using the username as the key (6)
redisRouter.delete('/delete-user', deleteUserController);

// Export the router so it can be used in app.js (7)
export default redisRouter;