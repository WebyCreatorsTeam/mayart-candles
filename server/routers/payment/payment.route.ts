import { Router } from "express";
const router = Router()
import { addPaymentText, edtiPaymentText } from "../../controllers/payment.controller";

router
    .post('/add-payment-text', addPaymentText)
    .patch('/update-payment-text', edtiPaymentText)

export default router