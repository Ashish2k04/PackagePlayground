import { Router } from "express";
import { createNotes } from "../controllers/notes.controller.js";

const noteRouter = Router();

noteRouter.post('/create-note', createNotes);

export default noteRouter;