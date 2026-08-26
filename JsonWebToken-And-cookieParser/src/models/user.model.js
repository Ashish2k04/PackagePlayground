// Import Mongoose so we can create a Schema and Model for MongoDB (22)
import mongoose from "mongoose";

// Import bcryptjs so we can hash and compare passwords (23)
import bcrypt from "bcryptjs";

// Create a Mongoose Schema that defines the structure of user documents (24)
const userSchema = new mongoose.Schema({

    // Define the username field (25)
    username: {

        // The username must be a String (26)
        type: String,

        // The username is required (27)
        required: [true, "Username required."],

        // Every username must be unique (28)
        unique: [true, "Unique username required."],

        // Remove extra spaces from the beginning and end of the username (29)
        trim: true

    },

    // Define the email field (30)
    email: {

        // The email must be a String (31)
        type: String,

        // The email is required (32)
        required: [true, "Username required."],

        // Every email must be unique (33)
        unique: [true, "Unique username required."],

        // Remove extra spaces from the beginning and end of the email (34)
        trim: true

    },

    // Define the password field (35)
    password: {

        // The password must contain at least 6 characters (36)
        type: String,

        minlength: [6, "Password must be at least 6 characters long"]

    }

})

// This middleware runs before a user document is saved in MongoDB (37)
userSchema.pre('save', async function(next) { 

    // If the password was not changed, skip password hashing and continue saving (38)
    if(!this.isModified('password')) return next();     

    // Hash the password using bcrypt before saving it to the database (39)
    this.password = await bcrypt.hash(this.password, 10); 

})

// Create a custom method that will compare a user's entered password
// with the hashed password stored in the database (40)
userSchema.methods.comparePassword = async function(userPassword) {

    // Compare both passwords and return true or false (41)
    return await bcrypt.compare(userPassword, this.password);

};

// Create a Mongoose Model named "Users" using the userSchema (42)
const userModel = mongoose.model("Users", userSchema);

// Export the model so controllers can import and use it (43)
export default userModel;