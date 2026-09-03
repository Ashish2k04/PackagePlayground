import { Router } from "express";
import { uploadController, updateController, writeController, removeTagsController } from "../controllers/nodeid3.controller.js";
import upload from "../middlewares/upload.middlware.js";

const nodeid3Router = Router();

nodeid3Router.post('/upload-song', upload.single('song'), uploadController);
nodeid3Router.post('/update-song', upload.single('song'), updateController);
nodeid3Router.post('/write-song', upload.single('song'), writeController);
nodeid3Router.post('/remove-tags-song', upload.single('song'), removeTagsController);

export default nodeid3Router;