"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getCandle_controller_1 = require("../../controllers/candle/getCandle.controller");
const candles_route_1 = __importDefault(require("./candles.route"));
const admin_login_1 = require("../../middlewares/admin.login");
const router = (0, express_1.Router)();
router
    .get('/get-candles', getCandle_controller_1.getAllCandles)
    .post('/get-one-candle', getCandle_controller_1.getOneCandle)
    .post('/get-candles-by-category', getCandle_controller_1.getCandleByCategory)
    .use('/', admin_login_1.userIsLogin, candles_route_1.default);
exports.default = router;
//# sourceMappingURL=candle.index.route.js.map