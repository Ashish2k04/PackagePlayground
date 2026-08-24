// Create an async controller function to handle the request (15)
async function exampleController(req,res) {

    // Send a JSON response back to the client (16)
    res.json({

        // Send a message showing which route is currently running (17)
        message: "Server is running on route /api/example",

        // Get the PORT value from environment variables (18)
        port: process.env.PORT || 8000

    })

}

// Export the controller so we can import and use it in the route file (12)
export default exampleController;