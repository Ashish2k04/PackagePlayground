import express from 'express';
import { handleError } from './middlewares/error.middleware.js';
import authRouter from './routes/auth.route.js';

const app = express();
app.use(express.json());

app.use('/api', authRouter);

app.use(handleError);
export default app;