// Import jsonwebtoken so we can verify JWT tokens (64)
import jwt from 'jsonwebtoken';

// Create middleware that checks whether the user has a valid JWT (65)
export async function authenticateUser(req,res,next) {

    try{

        // Get the token stored in the "token" cookie (66)
        const token = req.cookies.token;

        // Print the token in the terminal for testing purposes (67)
        console.log(token)

        // Verify the token using the JWT secret key (68)
        const verify = jwt.verify(token, process.env.JWT_SECRET);

        // Stop the request if the token could not be verified (69)
        if(!verify){

            // Send a forbidden response to the client (70)
            return res.status(403).json({
                message: "User not authorized."
            })
        }

        // Store the verified JWT payload inside req.user (71)
        req.user = verify

        // Continue to the next middleware or controller (72)
        next();
    }

    // Handle invalid, missing, or expired JWT tokens (73)
    catch(err){

        // Send an unauthorized response to the client (74)
        return res.status(401).json({
            message: "Invalid or expired token."
        });
    }
}