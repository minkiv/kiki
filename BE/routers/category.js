import express from "express";
import categoryController from "../modules/Category/Controller/index.js";
import upload from '../config/configImage.js'
const router = express.Router()
router.get('/', categoryController.getAllCategorys)
router.get('/:id', categoryController.getOneCategorys)
router.use(upload.single('file'))
router.delete('/:id', categoryController.deleteCategorys)
router.post('/add', categoryController.addCategorys)
router.put('/edit/:id', categoryController.editCategory)
export default router