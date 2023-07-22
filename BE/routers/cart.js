import express from 'express'
import cartController from '../modules/Cart/Controller/index.js'

const router = express.Router()
router.get('/', cartController.getAllCarts)
router.delete('/',cartController.deleteCarts)
router.put("/edit/:id", cartController.editCart)
router.post('/add', cartController.addCarts)
export default router

