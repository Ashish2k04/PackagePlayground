// Import the user model so we can interact with users in MongoDB (13)
import userModel from "../models/user.model.js";

// Import jsonwebtoken so we can create JWT tokens (14)
import jwt from 'jsonwebtoken';

// Handle requests for registering a new user (15)
async function registerController(req,res) {

    // Get username, email, and password from the request body (16)
    const {username, email, password} = req.body;

    // Check whether a user already exists with the same username or email (17)
    const userExists = await userModel.findOne({

        // Use $or so either username or email can be checked (18)
        $or: [

            // Check for an existing username (19)
            {username},

            // Check for an existing email (20)
            {email}
        ]
    })

    // Stop the registration if a matching user already exists (21)
    if(userExists){

        // Send a 409 Conflict response to the client (22)
        return res.status(409).json({
            message: "Invalid Credentials."
        })
    }

    // Create and save a new user in MongoDB (23)
    const user = await userModel.create({
        username, email, password
    });

    // Create a JWT containing the newly created user's ID (24)
    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);

    // Store the JWT inside a cookie named "token" (25)
    res.cookie("token", token);
    
    // Send a successful registration response (26)
    return res.status(201).json({

        // Send a success message (27)
        message: "User created.",

        // Send selected user information without sending the password (28)
        info: {
            username: user.username,
            email: user.email
        }
    })
}

// Handle requests for logging in an existing user (29)
async function loginController(req,res){

    // Get username, email, and password from the request body (30)
    const {username, email, password} = req.body;

    // Find a user using either the username or email (31)
    const user = await userModel.findOne({

        // Use $or to check both username and email (32)
        $or: [
            {username},
            {email}
        ]
    })

    // Stop the login process if the user does not exist (33)
    if(!user){

        // Send a 404 Not Found response (34)
        return res.status(404).json({
            message: "User not exists."
        })
    }

    // Compare the entered password with the user's stored password (35)
    const userPassword = await user.comparePassword(req.body.password);

    // Stop the login process if the password does not match (36)
    if(!userPassword){

        // Send a 401 Unauthorized response (37)
        return res.status(401).json({
            message:  "Invalid email or password"
        })
    }

    // Create a JWT containing the logged-in user's ID (38)
    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);

    // Store the JWT inside a cookie named "token" (39)
    res.cookie("token", token);

    // Send a successful login response (40)
    return res.status(200).json({

        // Send a success message (41)
        message: "Login successful",

        // Send selected user information without sending the password (42)
        info: {
            username: user.username,
            email: user.email
        }
    })

}

// Handle requests for fetching the authenticated user's information (43)
async function getUserController(req,res){

    // Get the user ID that was added to req.user by the authentication middleware (44)
    const userId = req.user.id;
    
    // Find the authenticated user in MongoDB using their ID (45)
    const user = await userModel.findById(userId);

    // Send the authenticated user's information (46)
    return res.status(200).json({
        message: "User fetched.",
        info: {
            username: user.username,
            email: user.email
        }
    })
}

// Export all controllers so they can be used inside the routes file (47)
export {registerController, loginController, getUserController};