// Import Router from Express so we can create mail-related routes (95)
import { Router } from "express";

// Import the controller that handles sending emails (49)
import mailController from "../controllers/mail.controller.js";

// Create an Express Router instance (96)
const mailRouter = Router();

// Create a POST route for sending an email (97)
// Final route: POST /api/send-mail
mailRouter.post('/send-mail', mailController);

// Export the router so app.js can connect it to the application (2)
export default mailRouter;