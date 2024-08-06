import { Router } from "express";
import OrderController from "../controllers/odersControllers";

const orderRouter = Router()

orderRouter.get('/', OrderController.getAllOrders)
orderRouter.post('/', OrderController.createOrder)
orderRouter.post('/:id', OrderController.updateOrder)
orderRouter.delete('/:id', OrderController.deleteOrder)

export default orderRouter