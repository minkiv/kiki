import express from 'express'
import productController from '../modules/Product/Controller/index.js'
 const router = express.Router()
 router.get("/", productController.getAllProducts)
 router.get("/:id", productController.getOneproducts)
 router.get("/:id", productController.deleteProducts)
 
 export default router 