// Import node-id3 to read, write, update and remove ID3 metadata from MP3 files (1)
import id3 from 'node-id3';


// Controller to read song metadata (2)
export async function uploadController(req,res) {

    // Get the uploaded MP3 file from Multer's memory storage (3)
    const song = req.file.buffer

    // Read the ID3 metadata from the uploaded MP3 Buffer (4)
    const decodeSong = id3.read(song);

    // Send the extracted song details in the response (5)
    return res.status(201).json({
        message: "Song details.",
        info: {
            title: decodeSong.title,
            artist: decodeSong.artist,
            album: decodeSong.album
        }
    })
}


// Controller to update existing song metadata (6)
export function updateController(req, res) {

    // Get the uploaded MP3 file Buffer from Multer (7)
    const song = req.file.buffer;

    // Update the existing ID3 metadata of the song (8)
    const updatedSong = id3.update(
        {
            title: "Updated Song",
            artist: "Ashish Tiwari",
            album: "PackagePlayground"
        },
        song
    );

    // Read the updated metadata to verify the changes (9)
    const info = id3.read(updatedSong);

    // Send the updated song information in the response (10)
    return res.status(200).json({
        message: "Song metadata updated successfully.",
        info: {
            title: info.title,
            artist: info.artist,
            album: info.album
        }
    });
}


// Controller to write song metadata (11)
export async function writeController(req, res) {

    // Get the uploaded MP3 file Buffer from Multer (12)
    const song = req.file.buffer;

    // Create the metadata that will be written to the song (13)
    const tags = {
        title: "My New Song",
        artist: "Ashish Tiwari",
        album: "PackagePlayground"
    };

    // Write the given metadata into the MP3 Buffer (14)
    const updatedSong = id3.write(tags, song);

    // Read the metadata again to verify what was written (15)
    const info = id3.read(updatedSong)

    // Send the written song information in the response (16)
    return res.status(200).json({
        message: "Song metadata written successfully.",
        info: {
            title: info.title,
            artist: info.artist,
            album: info.album
        }
    });
}


// Controller to remove song metadata (17)
export async function removeTagsController(req, res) {

    // Get the uploaded MP3 file Buffer from Multer (18)
    const song = req.file.buffer;

    // Remove the ID3 metadata from the uploaded song (19)
    id3.removeTags(song);

    // Send a success response after removing the metadata (20)
    return res.status(200).json({
        message: "Song metadata removed successfully."
    });
}