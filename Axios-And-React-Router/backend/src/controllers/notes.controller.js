import noteModel from "../models/note.model.js";

async function noteController(req,res,next) {
    try{
    const {title, description} = req.body;

    const note = await noteModel.create({title, description});

    return res.status(201).json({
        message: "Note router is working.",
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

export {noteController};