// Load environment variables from the .env file into process.env (11)
import 'dotenv/config';

// Import createTransport from Nodemailer to create an email transporter (12)
import {createTransport} from 'nodemailer';

// Create a transporter that will handle sending emails (13)
const transporter = createTransport({

    // Use Gmail as the email service (14)
    service: 'gmail',

    // Configure authentication for the Gmail account (15)
    auth:{

        // Use Google OAuth2 authentication instead of a normal password (16)
        type: 'OAuth2',

        // The Gmail address that will send the emails (17)
        user: process.env.GOOGLE_USER,

        // Google OAuth Client ID (18)
        clientId: process.env.GOOGLE_CLIENT_ID,

        // Google OAuth Client Secret (19)
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,

        // Google OAuth Refresh Token used to get access when needed (20)
        refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
    },
});

// Verify whether the email transporter is configured and ready to send emails (21)
transporter.verify()

// Run this function if the transporter is successfully verified (22)
.then(()=>{

    // Show a success message in the terminal (23)
    console.log('Email transporter is ready to send emails.')
})

// Run this function if something goes wrong while verifying the transporter (24)
.catch((err)=>{

   // Show the error message in the terminal (25)
   console.log(`Something went wrong in email transporter: ${err.message}`)
})

// Create and export a reusable function for sending emails (26)
export async function sendEmail({to, subject, html, text}) {

    // Create an object containing the email details (27)
    const mailOptions = {

        // Set the sender's email address (28)
        from: process.env.GOOGLE_USER,

        // Set the receiver's email address (29)
        to,

        // Set the email subject (30)
        subject,

        // Set the HTML content of the email (31)
        html,

        // Set the plain text version of the email if provided (32)
        text
    };

    // Send the email using the configured Nodemailer transporter (33)
    const details = await transporter.sendMail(mailOptions);

    // Print the email sending details in the terminal (34)
    console.log("Email sent:", details);

}