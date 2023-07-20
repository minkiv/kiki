import express from 'express'
import productController from '../modules/Product/Controller/index.js'
import upload from '../config/configImage.js'
import { checkAdminAuthorization } from '../middlewares/authorization.js'

 const router = express.Router()
 router.get("/", productController.getAllProducts)
 router.get("/:id", productController.getOneproducts)

 router.use(upload.array('file', 5))
 router.delete("/:id",checkAdminAuthorization ,productController.deleteProducts)
 router.post("/add",checkAdminAuthorization,productController.addProducts)
 router.put("/edit/:id",checkAdminAuthorization, productController.editProduct)

 export default router 