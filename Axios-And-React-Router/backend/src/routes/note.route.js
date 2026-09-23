import { Router } from "express";
import { createNotes, deleteNotes } from "../controllers/notes.controller.js";

const noteRouter = Router();

noteRouter.post('/create-note', createNotes);
noteRouter.delete('/delete-note/:noteId', deleteNotes);

export default noteRouter;