import express from "express";
import colorController from "../modules/Color/Controller/index.js";

const router = express.Router()
router.post("/add", colorController.addColors)
export default router