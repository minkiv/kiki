import express from 'express'
import productController from '../modules/Product/Controller'
 const router = express.Router()
 router.get("/:id", productController.getOneproducts)
 export default router 