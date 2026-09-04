import { Router } from "express";
import { registerController } from "../controllers/redis.controller.js";

const redisRouter = Router();

redisRouter.post('/register', registerController);

export default redisRouter;