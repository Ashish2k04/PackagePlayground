// Load environment variables from the .env file (7)
import "dotenv/config"

// Import Mongoose so we can connect and interact with MongoDB (15)
import mongoose from "mongoose";

// Create an async function that will connect our application to MongoDB (16)
async function connectDB() {

    // Try to connect to the database (17)
    try{

        // Connect to MongoDB using the MONGODB_URI stored in the .env file (18)
        mongoose.connect(process.env.MONGODB_URI)

        // Show this message when the database connection is successful (19)
        console.log('Database is connected.')
    }

    // Catch and display any error that happens while connecting to the database (20)
    catch(err){

        // Show the error message in the terminal (21)
        console.log(`Something went wrong in db: ${err.message}`)
    }
}

// Export the connectDB function so server.js can import and call it (8)
export default connectDB;