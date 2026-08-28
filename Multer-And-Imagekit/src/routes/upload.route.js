import { Router } from "express";
import imageController from "../controllers/upload.controller.js";
import upload from "../middlewares/multer.middleware.js";

const uploadRoute = Router();

uploadRoute.post('/upload', upload.single('image') ,imageController);

export default uploadRoute;