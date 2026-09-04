import { Router } from "express";
import { registerController, getEmailController } from "../controllers/redis.controller.js";

const redisRouter = Router();

redisRouter.post('/register', registerController);
redisRouter.post('/get-me', getEmailController);

export default redisRouter;