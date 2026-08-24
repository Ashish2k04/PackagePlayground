// Load environment variables from the .env file (7)
import 'dotenv/config'

// Import the app we exported from src/app.js (6)
import app from "./src/app.js";

// Get the PORT value from the .env file,
// or use 8000 if no PORT value is available (8)
const PORT = process.env.PORT || 8000

// Start the Express server on the selected PORT (9)
app.listen(PORT, ()=>{

    // Show a message in the terminal when the server is running (10)
    console.log(`Server is running on port ${PORT}`)
})