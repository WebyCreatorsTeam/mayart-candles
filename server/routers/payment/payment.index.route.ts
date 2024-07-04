import { Router } from "express";
const router = Router()
import { getPaymentText } from "../../controllers/payment.controller";
import paymentRoute from "./payment.route"
import { userIsAdmin } from "../../middlewares/admin.user.mw";

router
    .get('/get-payment', getPaymentText)
    .use('/', userIsAdmin ,paymentRoute)

export default router