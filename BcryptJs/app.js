// Import bcryptjs so we can hash and compare passwords (1)
import bcrypt from "bcryptjs";

// Hash the plain password "Ashish" using bcrypt with 10 salt rounds (2)
const hashPassword = await bcrypt.hash("Ashish", 10);

// Compare the entered password with the generated hashed password (3)
// bcrypt.compare() returns true if both passwords match, otherwise false
const compare = await bcrypt.compare("Ashish", hashPassword);

// Print the hashed password in the terminal (4)
console.log(hashPassword);

// Print the comparison result (true or false) in the terminal (5)
console.log(compare);