// Import rateLimit from express-rate-limit to limit incoming requests (1)
import {rateLimit} from 'express-rate-limit';

// Create a rate limiter for the login API (2)
export const loginLimiter = rateLimit({

    // Define the time window in which requests are counted (3)
    // 1 * 60 * 1000 = 1 minute
    windowMs: 1 * 60 * 1000,

    // Allow a maximum of 5 requests from the same client
    // during the defined time window (4)
    limit: 5,

    // Message returned when the request limit is exceeded (5)
    message: "Too many requests, please try again later."

})