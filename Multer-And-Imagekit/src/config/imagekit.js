import 'dotenv/config'
import { ImageKit } from "@imagekit/nodejs";

const imagekit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
});

async function imagekitUpload(buffer) {
     const result = imagekit.files.upload({
           file: buffer.toString('base64'),
           fileName: 'image.jpg',
           folder: 'new-folder'
     })
     return result;
}

export default imagekitUpload;

