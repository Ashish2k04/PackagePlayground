// Load environment variables from the .env file (75)
import "dotenv/config"

// Import Mongoose so we can connect to MongoDB (76)
import mongoose from "mongoose";

// Create a function that connects the application to MongoDB (77)
async function connectDB() {

    // Try to connect to MongoDB (78)
    try{

        // Connect using the MongoDB URI stored in the .env file (79)
        mongoose.connect(process.env.MONGODB_URI)

        // Show a message when the database connection is successful (80)
        console.log('Database is connected.')
    }

    // Handle any error that occurs while connecting to MongoDB (81)
    catch(err){

        // Print the database connection error in the terminal (82)
        console.log(`Something went wrong in db: ${err.message}`)
    }
}

// Export the function so server.js can use it (83)
export default connectDB;