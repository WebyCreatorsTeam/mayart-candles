import { deleteOrder, getOrder, saveOrder } from "../../controllers/order/order.contoller";
import { Router } from "express";
const router = Router()

router
    .post('/send-order', saveOrder)
    .get('/get-orders', getOrder)
    .delete('/delete-order', deleteOrder)

export default router