// Load environment variables from the .env file (1)
import "dotenv/config";

// Global error-handling middleware for the Express application (2)
// Express identifies error-handling middleware because it has four parameters:
// error, req, res, next
export function handleError(error, req, res, next){

    // Create a basic error response containing the error message (3)
    const response = {
        message: error.message
    };

    // Include the error stack when the application is running in development mode (4)
    // The stack is useful during development for finding where the error occurred
    if(process.env.NODE_ENVIRONMENT === "development"){
        response.stack = error.stack;
    };

    // Send the error response using the status code attached to the error (5)
    return res.status(error.status).json(response);
}