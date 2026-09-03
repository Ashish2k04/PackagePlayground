// Import Multer to handle multipart/form-data file uploads (1)
import multer from "multer";

// Create Multer configuration (2)
const upload = multer({

    // Store uploaded files temporarily in memory instead of saving them to disk (3)
    storage: multer.memoryStorage(),

    // Set restrictions for uploaded files (4)
    limits: {

        // Allow a maximum file size of 10 MB (5)
        fileSize: 10 * 1024 * 1024

    }

});

// Export the Multer middleware so it can be used in routes (6)
export default upload;