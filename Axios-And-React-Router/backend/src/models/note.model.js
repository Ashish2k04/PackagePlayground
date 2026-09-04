import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        trim: true,
        maxlength: 50
    },
    description: {
        type: String,
        default: "No description provided.",
        trim: true
    }
}, {timestamps: true});

const noteModel = mongoose.model("notes", noteSchema);

export default noteModel;