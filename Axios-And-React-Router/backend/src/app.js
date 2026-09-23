import express from 'express';
import noteRouter from './routes/note.route.js';
import handleError from './middlewares/error.middleware.js';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["post", "delete"]
}))

app.use('/api', noteRouter);

app.use(handleError);
export default app;