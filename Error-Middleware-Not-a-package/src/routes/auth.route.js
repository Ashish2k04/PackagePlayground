import { Router } from "express";
import registerUserController from "../controllers/auth.controller.js";

const authRouter = Router();

authRouter.post('/register', registerUserController);

export default authRouter;