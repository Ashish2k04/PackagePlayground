import express from 'express';
import nodeid3Router from './routes/nodeid3.route.js';

const app = express();
app.use(express.json());

app.use('/api', nodeid3Router);

export default app;