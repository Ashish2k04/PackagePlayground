// Controller responsible for handling the login request (1)
async function loginController(req, res) {

    // Get username and email from the request body (2)
    const {username, email} = req.body;

    // Send a successful login response with the user's information (3)
    return res.status(200).json({
        message: "Successfully logged in.",
        info:{
            name: username,
            email: email
        }
    })
}

// Export the controller so it can be used in the route (4)
export default loginController;