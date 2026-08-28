// Import the reusable sendEmail function from the mail service (35)
import { sendEmail } from "../services/mail.service.js";

// Create an async controller to handle requests for sending emails (36)
async function mailController(req,res) {

     // Try to send the email and handle any possible errors (37)
     try{

            // Get user data from the request body (38)
            const {username, email, password} = req.body;
    
            // Call the reusable sendEmail function to send an email (39)
            await sendEmail({

                // Send the email to the email address received from the request (40)
                to: email,

                // Set the subject of the email (41)
                subject: "Test Email",

                // Create the HTML content of the email (42)
                html: `<p>Hello ${username}</p>
                <p>Thank you for <strong>here is your test email</strong></p>
                <p>Please verify your test email address by clicking the link below:</p>
                <a href="#">Verify Email.</a>
                <p>If you did not created an account, please ignore this email.</p>
                <p>Best regards, <br>The Qevro-Ai Team</p>`
            })
    
        // Send a successful response after the email has been sent (43)
        return res.status(201).json({

            // Send a success message to the client (44)
            message: "Email Sent!"
        });
        }

        // Catch any error that happens while sending the email (45)
        catch(err){

           // Send a server error response (46)
           return res.status(500).json({

            // Send a general error message (47)
            message: "Something went wrong.",

            // Send the actual error message for debugging (48)
            error: err.message
           })
        }
}

// Export the controller so mail.route.js can use it (49)
export default mailController;