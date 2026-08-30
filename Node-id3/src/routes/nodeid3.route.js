import { Router } from "express";
import { uploadController } from "../controllers/nodeid3.controller.js";
import upload from "../middlewares/upload.middlware.js";

const nodeid3Router = Router();

nodeid3Router.post('/upload', uploadController);

export default nodeid3Router;