// Load environment variables from the .env file (1)
import 'dotenv/config';

// Import ioredis to create a connection with the Redis database (2)
import Redis from "ioredis";

// Create a Redis client using the connection details from environment variables (3)
const redis = new Redis({

    // Redis database host/address (4)
    host: process.env.REDIS_HOST,

    // Redis database port (5)
    port: process.env.REDIS_PORT,

    // Password required to connect to the Redis database (6)
    password: process.env.REDIS_PASSWORD

});

// Listen for the connect event to know when Redis successfully connects (7)
redis.on('connect', ()=>{

    // Display a message when the Redis connection is established (8)
    console.log("Redis is connected and ready to work.")

});

// Export the Redis client so it can be used throughout the application (9)
export default redis;