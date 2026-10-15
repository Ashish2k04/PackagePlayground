import "dotenv/config";
import express from 'express';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Server is running!', success: true});
});

export default app;