// Import Multer so we can handle file uploads (39)
import multer from "multer";

// Create a Multer instance with our upload configuration (40)
const upload = multer({

    // Store uploaded files temporarily in memory (RAM) instead of saving them locally (41)
    storage: multer.memoryStorage(),

    // Set limits for uploaded files (42)
    limits: {

        // Allow a maximum file size of 5 MB (43)
        fileSize: 5 * 1024 * 1024

    }

});

// Export the configured Multer middleware so routes can use it (15)
export default upload;