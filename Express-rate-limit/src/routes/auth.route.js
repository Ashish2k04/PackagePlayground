import {Router} from 'express';
import loginController from '../controllers/auth.controller.js';
import { loginLimiter } from '../middlewares/rateLimit.middlware.js';

const appRouter = Router();

appRouter.post('/login', loginLimiter, loginController);

export default appRouter;