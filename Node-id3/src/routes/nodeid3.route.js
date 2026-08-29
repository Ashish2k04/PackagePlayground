import { Router } from "express";
import { uploadController } from "../controllers/nodeid3.controller.js";

const nodeid3Router = Router();

nodeid3Router.post('/upload', uploadController);

export default nodeid3Router;