// Load environment variables from the .env file into process.env (7)
import "dotenv/config";

// Import the Express app that was exported from src/app.js (6)
import app from "./src/app.js";

// Import the database connection function from database.js (8)
import connectDB from "./src/config/database.js";

// Get the PORT from the .env file, or use 8000 if PORT is not available (9)
const PORT = process.env.PORT || 8000;

// Call the function to connect our application to MongoDB (10)
connectDB();

// Start the Express server and make it listen on the selected PORT (11)
app.listen(PORT, ()=>{

    // Show a message when the server starts successfully (12)
    console.log(`Server is running on port ${PORT}`);

    // Show the URL for testing the register route using Postman (13)
    console.log(`Try it on Postman by sending a POST request to: http://localhost:${PORT}/api/register`)

    // Show the URL for testing the login route using Postman (14)
    console.log(`And to get the data try to sending a GET request to: http://localhost:${PORT}/api/login`)
})