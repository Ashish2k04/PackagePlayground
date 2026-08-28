import imagekitUpload from "../config/imagekit.js";

async function imageController(req,res) {
     try{
          const image = await imagekitUpload(req.file.buffer);

         return res.status(201).json({
           message: "View the image by opening the link given below in your browser.",
           url: image.url
         })
     }
     catch(err){
        return res.status(500).json({
            message: "Something went wrong.",
            error: err.message
        })
     }
}

export default imageController;