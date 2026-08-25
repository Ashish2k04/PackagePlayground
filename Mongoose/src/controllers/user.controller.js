// Import the userModel so we can interact with user data in MongoDB (49)
import userModel from "../models/user.model.js";

// Create an async controller function to handle user registration requests (50)
async function registerController(req,res) {

    // Get username, email, and password from the JSON data sent by the client (51)
    const {username, email, password} = req.body;

    // Check if a user already exists with the same username or email (52)
    const userExists = await userModel.findOne({

        // Use $or to check both username and email (53)
        $or: [

            // Check for a matching username (54)
            {username},

            // Check for a matching email (55)
            {email}
        ]
    })

    // If a user already exists, stop here and send a 409 Conflict response (56)
    if(userExists){

        // Send an error message back to the client (57)
        return res.status(409).json({
            message: "Invalid Credentials."
        })
    }

    // Create a new user document in MongoDB (58)
    const user = await userModel.create({

        // The password will be hashed by the pre-save middleware before saving (37)
        username, email, password
    });

    // Send a 201 Created response after successfully creating the user (59)
    return res.status(201).json({

        // Send a success message (60)
        message: "User created.",

        // Send selected user information back to the client (61)
        info: {
            username: user.username,
            email: user.email
        }
    })
}

// Create an async controller function to handle user login requests (62)
async function loginController(req,res){

    // Get username, email, and password from the request body (63)
    const {username, email, password} = req.body;

    // Find a user using either the username or email (64)
    const user = await userModel.findOne({

        // Check both username and email using $or (65)
        $or: [
            {username},
            {email}
        ]
    })

    // If no user is found, send a 404 Not Found response (66)
    if(!user){

        return res.status(404).json({
            message: "User not exists."
        })
    }

    // Call the comparePassword method created in the user model (40)
    // to compare the entered password with the stored hashed password (67)
    const userPassword = await user.comparePassword(req.body.password);

    // If the passwords do not match, send a 401 Unauthorized response (68)
    if(!userPassword){

        return res.status(401).json({
            message:  "Invalid email or password"
        })
    }

    // If everything is correct, send a successful login response (69)
    return res.status(200).json({

        message: "Login successful",

        // Send selected user information back to the client (70)
        info: {
            username: user.username,
            email: user.email
        }
    })

}

// Export both controllers so user.route.js can import and use them (45)
export {registerController, loginController};