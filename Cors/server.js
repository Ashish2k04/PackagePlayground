// Import the configured Express application from src/app.js (9)
import app from "./src/app";

// Set the port number on which the server will run (10)
// Note: 3000 is truthy, so this expression will always use 3000
const PORT = 3000 || 8000;

// Start the Express server and make it listen on the selected port (11)
app.listen(PORT, ()=>{

    // Show a message confirming that the server is running (12)
    console.log(`Server is running on port ${PORT}`)
});