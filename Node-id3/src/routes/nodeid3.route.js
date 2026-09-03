// Import Router from Express to create a separate router for Node-ID3 APIs (1)
import { Router } from "express";

// Import all controller functions that handle the Node-ID3 API logic (2)
import { uploadController, updateController, writeController, removeTagsController } from "../controllers/nodeid3.controller.js";

// Import Multer middleware to handle uploaded song files (3)
import upload from "../middlewares/upload.middlware.js";

// Create a new Express router for Node-ID3 routes (4)
const nodeid3Router = Router();

// Receive a song file and read its ID3 metadata (5)
// upload.single('song') expects the uploaded file field to be named "song"
nodeid3Router.post('/upload-song', upload.single('song'), uploadController);

// Receive a song file and update its ID3 metadata (6)
nodeid3Router.post('/update-song', upload.single('song'), updateController);

// Receive a song file and write ID3 metadata to it (7)
nodeid3Router.post('/write-song', upload.single('song'), writeController);

// Receive a song file and remove its ID3 metadata (8)
nodeid3Router.post('/remove-tags-song', upload.single('song'), removeTagsController);

// Export the router so it can be used in app.js (9)
export default nodeid3Router;