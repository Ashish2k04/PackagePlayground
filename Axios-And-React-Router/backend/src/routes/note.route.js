import { Router } from "express";
import { noteController } from "../controllers/notes.controller.js";

const noteRouter = Router();

noteRouter.post('/create-note', noteController);

export default noteRouter;