// Import Router from Express to create a separate router (11)
import { Router } from 'express';

// Import the controller function that will handle this route (12)
import exampleController from '../controllers/example.controller.js';

// Create an instance of the Express Router (13)
const exampleRouter = Router();

// When a GET request comes to "/example",
// run the exampleController function (14)
exampleRouter.get('/example', exampleController);

// Export the router so we can import and connect it in app.js (2)
export default exampleRouter;