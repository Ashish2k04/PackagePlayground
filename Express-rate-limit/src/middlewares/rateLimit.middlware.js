import {rateLimit} from 'express-rate-limit';

export const loginLimiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    limit: 5,
    message: "Too many requests, please try again later."
})