import { Router } from "express";
import { createNotes, deleteNotes, getNotes } from "../controllers/notes.controller.js";

const noteRouter = Router();

noteRouter.post('/create-note', createNotes);
noteRouter.get('/get-notes', getNotes);
noteRouter.delete('/delete-note/:noteId', deleteNotes);

export default noteRouter;