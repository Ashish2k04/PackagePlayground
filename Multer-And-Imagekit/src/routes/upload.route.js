// Import Router from Express so we can create upload-related routes (13)
import { Router } from "express";

// Import the controller that will handle the uploaded image (14)
import imageController from "../controllers/upload.controller.js";

// Import the Multer middleware that will receive the uploaded file (15)
import upload from "../middlewares/multer.middleware.js";

// Create an Express Router instance (16)
const uploadRoute = Router();

// Create a POST route for uploading one image (17)
// "image" is the field name that must be used when sending the file
// Multer receives the file first, then imageController handles it
uploadRoute.post('/upload', upload.single('image') ,imageController);

// Export the router so app.js can connect it to "/api" (9)
export default uploadRoute;