import "dotenv/config";
import express from 'express';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

const app = express();
app.use(express.json());
app.use(passport.initialize());

app.get('/', (req, res) => {
  res.json({ message: 'Server is running!', success: true});
});

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "/auth/google/callback",
}, (_, __, profile, done) => {
  // Here you can handle the user profile and save it to your database if needed
  return done(null, profile);
}));

app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

app.get("/auth/google/callback", passport.authenticate("google", { failureRedirect: "/"}), (req, res) => {
  // Successful authentication, redirect or respond with user info
  res.json({ message: 'Authentication successful!', user: req.user });
}); 

export default app;