// Import the function that uploads the image to ImageKit (18)
import imagekitUpload from "../config/imagekit.js";

// Create an async controller to handle the uploaded image (19)
async function imageController(req,res) {

     // Try to upload the image and handle any possible errors (20)
     try{

          // Get the uploaded file from Multer and send its buffer to ImageKit (21)
          const image = await imagekitUpload(req.file.buffer);

         // Send a successful response containing the uploaded image URL (22)
         return res.status(201).json({

           // Tell the user how to view the uploaded image (23)
           message: "View the image by opening the link given below in your browser.",

           // Send the ImageKit URL of the uploaded image (24)
           url: image.url
         })
     }

     // Catch any error that happens during the upload process (25)
     catch(err){

        // Send a server error response (26)
        return res.status(500).json({

            // Send a general error message (27)
            message: "Something went wrong.",

            // Send the actual error message for debugging (28)
            error: err.message
        })
     }
}

// Export the controller so upload.route.js can use it (14)
export default imageController;