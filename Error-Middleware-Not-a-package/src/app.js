import express from 'express';
import { handleError } from './middlewares/error.middleware.js';

const app = express();
app.use(express.json());

app.use(handleError);
export default app;