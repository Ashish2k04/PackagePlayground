import {Router} from 'express';
import loginController from '../controllers/auth.controller.js';

const appRouter = Router();

appRouter.post('/login', loginController);

export default appRouter;