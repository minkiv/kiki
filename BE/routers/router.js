import express from "express"
import ProductRouter from "./product.js"
const router = express.Router();
const defaultRouter = [
    { path: "/product", route: ProductRouter }
]
defaultRouter.forEach((route) => {
    router.use(route.path, route.route)
})
export default router