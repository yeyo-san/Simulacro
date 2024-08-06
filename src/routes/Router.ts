import { Router } from "express";
import userRoutes from "./userRoutes";
import { fileRouter } from "./fileRouter";
import rolRouter from "./rolRouter";
import productRouter from "./productsRouter";
import orderRouter from "./orderRouter";

const router = Router()

router.use('/users', userRoutes)
router.use('/uploads', fileRouter)
router.use('/rol', rolRouter)
router.use('/products', productRouter)
router.use('/orders', orderRouter)

export default router