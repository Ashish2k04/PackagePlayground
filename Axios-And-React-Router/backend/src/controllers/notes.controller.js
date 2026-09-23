import noteModel from "../models/note.model.js";

async function createNotes(req,res,next) {
    try{
    const {title, description} = req.body;

    const note = await noteModel.create({title, description});

    return res.status(201).json({
        message: "Note created.",
        success: true,
        info: {
            title: note.title,
            description: note.description
        }
    })
   }
   catch(err){
     err.status = 500;
     next(err);
   }
};

async function deleteNotes(req,res,next){
    try{
        const {noteId} = req.params;

        const findNote = await noteModel.findById(noteId);

        if(!findNote){
            return res.status(404).json({
                message: "Invalid not id.",
                success: false,
                error: "Invalid note id or note is no longer exists."
            })
        }

        await noteModel.findByIdAndDelete(noteId);

        return res.status(200).json({
            message: "Note deleted.",
            success: true
        })
    }
    catch(err){
        err.status = 500;
        next(err);
    }
    
}

export {createNotes, deleteNotes};