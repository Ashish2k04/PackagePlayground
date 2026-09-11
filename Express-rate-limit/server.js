// Import the Express application from app.js (1)
import app from "./src/app.js";

// Start the Express server on port 3000 (2)
app.listen(3000, ()=>{

    // Display a message when the server starts successfully (3)
    console.log('Server is running on port 3000')
})