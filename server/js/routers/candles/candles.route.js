"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const candles_controller_1 = require("../../controllers/candles.controller");
const router = (0, express_1.Router)();
router
    .get('/get-candles', candles_controller_1.getAllCandles)
    .post('/get-one-candle', candles_controller_1.getOneCandle)
    .post('/save-candle', candles_controller_1.addCandle)
    .post('/get-candles-by-category', candles_controller_1.getCandleByCategory);
exports.default = router;
//# sourceMappingURL=candles.route.js.map