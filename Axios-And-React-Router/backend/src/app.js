import express from 'express';
import noteRouter from './routes/note.route.js';
import handleError from './middlewares/error.middleware.js';

const app = express();
app.use(express.json());

app.use('/api', noteRouter);

app.use(handleError);
export default app;