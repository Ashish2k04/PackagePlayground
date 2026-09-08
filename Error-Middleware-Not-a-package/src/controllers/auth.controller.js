// Controller responsible for handling user registration (1)
async function registerUserController(req,res,next) {

    try{

       // Get username, email and password from the request body (2)
       const {username, email, password} = req.body;

       // Send the user information as the response (3)
       return res.status(200).json({
          message: "User info.",
          info:{
            user_email: email,
            user_name: username
          }
       })
    }
    catch(error){

        // Add an HTTP status code to the error object (4)
        error.status = 500;

        // Pass the error to Express's error-handling middleware (5)
        next(error)
    }
}

// Export the controller so it can be used in the route (6)
export default registerUserController