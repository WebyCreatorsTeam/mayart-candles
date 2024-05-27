"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const candles_1 = require("../../controllers/candles");
const router = (0, express_1.Router)();
router.get('/get-all', candles_1.getAllCandles);
router.get('/get-one', candles_1.getOneCandle);
exports.default = router;
//# sourceMappingURL=candles.js.map