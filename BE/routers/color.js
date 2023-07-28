import express from "express";
import colorController from "../modules/Color/Controller/index.js";
import { checkAdminAuthorization, veryfiletoken } from "../middlewares/authorization.js";

const router = express.Router()
router.get("/", colorController.getAllColors)
router.get("/:id", colorController.getOneColors)
router.use(veryfiletoken)
router.use(checkAdminAuthorization)
router.post("/add", colorController.addColors)
router.delete("/:id", colorController.deleteColors)
router.put("/edit/:id", colorController.editColor)

export default router