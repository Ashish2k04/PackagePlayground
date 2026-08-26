// Load environment variables from the .env file into process.env (1)
import "dotenv/config";

// Import the configured Express application from app.js (2)
import app from "./src/app.js";

// Import the function used to connect the application to MongoDB (3)
import connectDB from "./src/config/database.js";

// Get the port number from the .env file, or use 8000 as a fallback (4)
const PORT = process.env.PORT || 8000;

// Connect the application to MongoDB before starting the server (5)
connectDB();

// Start the Express server and listen on the selected port (6)
app.listen(PORT, ()=>{

    // Show a message confirming that the server is running (7)
    console.log(`Server is running on port ${PORT}`);

    // Show the URL for testing the register API (8)
    console.log(`Try it on Postman by sending a POST request to: http://localhost:${PORT}/api/register`)

    // Show the URL for testing the login API (9)
    console.log(`And to get the data try to sending a GET request to: http://localhost:${PORT}/api/login`)
})