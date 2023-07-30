import express from "express";
import CapacityController from "../modules/Capacity/Controller/index.js";
import { checkAdminAuthorization, veryfiletoken } from "../middlewares/authorization.js";

const router = express.Router()
router.get("/", CapacityController.getAllCapacitys)
router.get("/:id", CapacityController.getOneCapacitys)
router.use(veryfiletoken)
router.use(checkAdminAuthorization)
router.post("/add", CapacityController.addCapacitys)
router.delete("/:id", CapacityController.deleteCapacitys)
router.put("/edit/:id", CapacityController.editCapacity)

export default router