import express from 'express'
import cartController from '../modules/Cart/Controller/index.js'

const router = express.Router()
router.get('/', cartController.getAllCarts)
router.delete('/:id',cartController.deleteCarts)

export default router

