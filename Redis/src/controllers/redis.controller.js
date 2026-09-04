// Import the Redis client configured in the config file (1)
import redis from '../config/redis.js'


// Controller to store user data in Redis (2)
async function registerController(req,res) {

    // Get the user's name and email from the request body (3)
    const {name, email} = req.body;

    // Store the email as a JSON string using the name as the Redis key (4)
    await redis.set(name, JSON.stringify({email}));

    // Send a successful response after storing the user data (5)
    return res.status(201).json({
        message: "User created.",
        info: {
            username: name,
            email: email
        }
    });
}


// Controller to retrieve the user's email from Redis (6)
async function getEmailController(req,res){

     // Get the username from the request body (7)
     const {name} = req.body;

     // Get the data stored in Redis using the username as the key (8)
     const user = await redis.get(name);

     // Check whether the requested key exists in Redis (9)
     if(!user){
        return res.status(404).json({
            message: "User not found.",
            success: false,
            error: "User not found, check if the spelling is correct or you registerd before."
        })
     }

     // Convert the JSON string returned by Redis back into a JavaScript object (10)
     const decode = JSON.parse(user);

     // Send the retrieved user information in the response (11)
     return res.status(200).json({
        message: "Fetched your data successfuly.",
        success: true,
        info: {
            user: name,
            email: decode.email
        }
     })
}


// Controller to delete user data from Redis (12)
async function deleteUserController(req, res) {

    // Get the username from the request body (13)
    const {name} = req.body;

    // Delete the Redis key associated with the username (14)
    // Returns 1 if the key was deleted and 0 if it did not exist
    const deleted = await redis.del(name);

    // Check whether the Redis key existed (15)
    if(!deleted){
        return res.status(404).json({
            message: "User not found.",
            success: false,
            error: "No user exists with this name."
        });
    }

    // Send a successful response after deleting the user data (16)
    return res.status(200).json({
        message: "User deleted successfully.",
        success: true
    });
}


// Export all Redis controllers so they can be used by the routes (17)
export {registerController, getEmailController, deleteUserController};