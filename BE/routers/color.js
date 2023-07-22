import express from "express";
import colorController from "../modules/Color/Controller/index.js";

const router = express.Router()
router.get("/", colorController.getAllColors)
router.get("/:id", colorController.getOneColors)

router.post("/add", colorController.addColors)
router.delete("/:id", colorController.deleteColors)
router.put("/edit/:id", colorController.editColor)

export default router