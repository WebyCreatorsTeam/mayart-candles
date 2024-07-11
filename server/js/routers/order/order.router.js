"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const order_contoller_1 = require("../../controllers/order/order.contoller");
const express_1 = require("express");
const router = (0, express_1.Router)();
router
    .post('/send-order', order_contoller_1.saveOrder)
    .get('/get-orders', order_contoller_1.getOrder)
    .delete('/delete-order', order_contoller_1.deleteOrder);
exports.default = router;
//# sourceMappingURL=order.router.js.map