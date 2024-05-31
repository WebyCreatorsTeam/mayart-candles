"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const candles_controller_1 = require("../../controllers/candles.controller");
const router = (0, express_1.Router)();
router
    .get('/get-candles', candles_controller_1.getAllCandles)
    // router.get('/get-one-candle', getOneCandle)
    .post('/save-candle', candles_controller_1.addCandle);
exports.default = router;
//# sourceMappingURL=candles.route.js.map