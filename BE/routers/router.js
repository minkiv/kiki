import express from "express"
import ProductRouter from "./product.js"
import CategoryRouter from './category.js'
import authRouter from './auth.js'
import CartRouter from './cart.js'
import OrderRouter from "./order.js"
import VorcherRouter from "./vorcher.js"
import paymentRouter from "./payment.js"
import statisticsRouter from "./statistics.js"
import comment_evaluateRouter from "./comment_evaluate.js"
const router = express.Router();
const defaultRouter = [
    { path: "/product", route: ProductRouter },
    { path: "/category", route: CategoryRouter },
    { path: '/auth', route: authRouter },
    { path: "/cart", route: CartRouter },
    { path: "/order", route: OrderRouter },
    { path: "/vorcher", route: VorcherRouter },
    { path: '/payment', route: paymentRouter },
    { path: '/statistics', route: statisticsRouter },
    { path: '/comment', route:comment_evaluateRouter }
]
defaultRouter.forEach((route) => {
    router.use(route.path, route.route)
})
export default router