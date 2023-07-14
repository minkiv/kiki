import express from 'express'
import productController from '../modules/Product/Controller/index.js'
import upload from '../config/configImage.js'

 const router = express.Router()
 router.get("/", productController.getAllProducts)
 router.get("/:id", productController.getOneproducts)
 router.use(upload.array('file', 5))
 router.get("/:id", productController.deleteProducts)
 router.post("/add", productController.addProducts)
 router.put("/edit/:id", productController.editProduct)

 export default router 