import express from 'express';
import redisRouter from './routes/redis.route';

const app = express();
app.use(express.json());

app.use('/api', redisRouter);

export default app;