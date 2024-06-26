"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const payment_controller_1 = require("../../controllers/payment.controller");
const payment_controller_2 = require("../../controllers/payment.controller");
router
    .post('/add-payment-text', payment_controller_1.addPaymentText)
    .get('/get-payment', payment_controller_2.getPaymentText)
    .patch('/update-payment-text', payment_controller_1.edtiPaymentText);
exports.default = router;
//# sourceMappingURL=payment.route.js.map