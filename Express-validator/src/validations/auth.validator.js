// Import validation functions from express-validator (5)
import {body, validationResult} from 'express-validator';

// Create middleware that checks the validation results (6)
const authValidator = (req,res,next)=>{

    // Get all validation errors created by the validators (7)
    const error = validationResult(req);

    // Check whether there are no validation errors (8)
    if(error.isEmpty()){

        // Continue to the next middleware or controller (9)
        return next();
    }

    // Send all validation errors back to the client (10)
    return res.status(500).json({
        error: error.array()
    })
};

// Create an array of validation middlewares for user registration (11)
export const validateUser = [

    // Check that username is between 4 and 12 characters (12)
    body('username')
        .isLength({min: 4, max: 12})
        .withMessage('Password should 8 characters to 12 characters long.'),

    // Remove extra spaces, convert email to lowercase, and check if it is a valid email (13)
    body('email')
        .trim()
        .toLowerCase()
        .isEmail()
        .withMessage('Please enter a validate email.'),

    // Remove extra spaces and check that password is between 8 and 12 characters (14)
    body('password')
        .trim()
        .isLength({min: 8, max: 12})
        .withMessage('Password should 8 characters to 12 characters long.'),

    // Check the final validation result and continue or return errors (15)
    authValidator
]