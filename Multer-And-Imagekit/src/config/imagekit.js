// Load environment variables from the .env file into process.env (29)
import 'dotenv/config'

// Import the ImageKit SDK so we can upload files to ImageKit (30)
import { ImageKit } from "@imagekit/nodejs";

// Create an ImageKit instance using our private API key (31)
const imagekit = new ImageKit({

    // Get the private key from the .env file (32)
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY

});

// Create an async function that receives an image buffer and uploads it to ImageKit (33)
async function imagekitUpload(buffer) {

     // Upload the image file to ImageKit (34)
     const result = imagekit.files.upload({

           // Convert the file buffer into Base64 format before uploading (35)
           file: buffer.toString('base64'),

           // Give the uploaded file a name (36)
           fileName: 'image.jpg',

           // Save the uploaded image inside this ImageKit folder (37)
           folder: 'new-folder'

     })

     // Return the upload result, including information such as the image URL (38)
     return result;

}

// Export the upload function so the controller can use it (18)
export default imagekitUpload;