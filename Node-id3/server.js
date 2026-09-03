// Load environment variables from the .env file (1)
import "dotenv/config";

// Import the Express application from app.js (2)
import app from "./src/app.js";

// Get the port from the environment variables,
// or use 8000 if PORT is not defined (3)
const PORT = process.env.PORT || 8000;

// Start the Express server and listen for incoming requests (4)
app.listen(PORT, ()=>{
    
    // Display the server's running port in the terminal (5)
    console.log(`Server is running on port ${PORT}`);
})