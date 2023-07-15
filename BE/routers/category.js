import express from "express";
import categoryController from "../modules/Category/Controller/index.js";

const router = express.Router()
router.get('/', categoryController.getAllCategorys)
export default router