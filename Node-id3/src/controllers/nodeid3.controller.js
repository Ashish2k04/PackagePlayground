import id3 from 'node-id3';

export async function uploadController(req,res) {
    const song = req.file.buffer
    const decodeSong = id3.read(song);

    return res.status(201).json({
        message: "Song details.",
        info: {
            title: decodeSong.title,
            artist: decodeSong.artist,
            album: decodeSong.album
        }
    })
}

export function updateController(req, res) {
    const song = req.file.buffer;

    const updatedSong = id3.update(
        {
            title: "Updated Song",
            artist: "Ashish Tiwari",
            album: "PackagePlayground"
        },
        song
    );

    const info = id3.read(updatedSong);

    return res.status(200).json({
        message: "Song metadata updated successfully.",
        info: {
            title: info.title,
            artist: info.artist,
            album: info.album
        }
    });
}

export async function writeController(req, res) {
    const song = req.file.buffer;

    const tags = {
        title: "My New Song",
        artist: "Ashish Tiwari",
        album: "PackagePlayground"
    };

    const updatedSong = id3.write(tags, song);

    const info = id3.read(updatedSong)

    return res.status(200).json({
        message: "Song metadata written successfully.",
        info: {
            title: info.title,
            artist: info.artist,
            album: info.album
        }
    });
}

export async function removeTagsController(req, res) {
    const song = req.file.buffer;

    id3.removeTags(song);

    return res.status(200).json({
        message: "Song metadata removed successfully."
    });
}