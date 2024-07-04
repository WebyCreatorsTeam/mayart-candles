"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const payment_controller_1 = require("../../controllers/payment.controller");
const payment_route_1 = __importDefault(require("./payment.route"));
const admin_user_mw_1 = require("../../middlewares/admin.user.mw");
router
    .get('/get-payment', payment_controller_1.getPaymentText)
    .use('/', admin_user_mw_1.userIsAdmin, payment_route_1.default);
exports.default = router;
//# sourceMappingURL=payment.index.route.js.map