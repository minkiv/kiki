import express from 'express'
import cartController from '../modules/Cart/Controller/index.js'

const router = express.Router()
router.get('/', cartController.getAllCarts)
router.delete('/',cartController.deleteCarts)
router.post("/edit", cartController.editCart)
router.post('/add', cartController.addCarts)
export default router

