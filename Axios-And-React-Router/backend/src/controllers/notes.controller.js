import noteModel from "../models/note.model.js";

async function noteController(req,res) {
    const {title, description} = req.body;

    return res.status(201).json({
        message: "Note router is working.",
        success: true,
        info: {
            title: title,
            description: description
        }
    })
};

export {noteController};