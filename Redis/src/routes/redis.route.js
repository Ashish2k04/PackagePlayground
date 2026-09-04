import { Router } from "express";
import { registerController, getEmailController, deleteUserController } from "../controllers/redis.controller.js";

const redisRouter = Router();

redisRouter.post('/register', registerController);
redisRouter.post('/get-email', getEmailController);
redisRouter.delete('/delete-user', deleteUserController);

export default redisRouter;