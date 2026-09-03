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

import id3 from 'node-id3';

export async function updateController(req, res) {
    const song = req.file.buffer;

    const updatedSong = id3.update(
        {
            title: "Updated Song",
            artist: "Ashish Tiwari",
            album: "PackagePlayground"
        },
        song
    );

    return res.status(200).json({
        message: "Song metadata updated successfully.",
        info: {
            title: updatedSong.title,
            artist: updatedSong.artist,
            album: updatedSong.album
        }
    });
}

import id3 from 'node-id3';

export async function writeController(req, res) {
    const song = req.file.buffer;

    const tags = {
        title: "My New Song",
        artist: "Ashish Tiwari",
        album: "PackagePlayground"
    };

    const updatedSong = id3.write(tags, song);

    return res.status(200).json({
        message: "Song metadata written successfully.",
        info: {
            title: updatedSong.title,
            artist: updatedSong.artist,
            album: updatedSong.album
        }
    });
}

import id3 from 'node-id3';

export async function removeTagsController(req, res) {
    const song = req.file.buffer;

    const updatedSong = id3.removeTags(song);

    return res.status(200).json({
        message: "Song metadata removed successfully.",
        info: updatedSong
    });
}