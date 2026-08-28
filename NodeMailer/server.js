// Load environment variables from the .env file into process.env (7)
import 'dotenv/config';

// Import the configured Express application from src/app.js (6)
import app from './src/app.js';

// Get the PORT from the .env file, or use 8000 if PORT is not available (8)
const PORT = process.env.PORT || 8000;

// Start the Express server and make it listen on the selected PORT (9)
app.listen(PORT, ()=>{

    // Show a message when the server starts successfully (10)
    console.log(`Server is running on port ${PORT}`)
})