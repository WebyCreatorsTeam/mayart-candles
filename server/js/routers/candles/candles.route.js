"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const candles_controller_1 = require("../../controllers/candles.controller");
const storage_1 = require("../../utils/cloudinary/storage");
const router = (0, express_1.Router)();
router
    .get('/get-candles', candles_controller_1.getAllCandles)
    .post('/get-one-candle', candles_controller_1.getOneCandle)
    .post('/save-candle', candles_controller_1.addCandle)
    .post('/get-candles-by-category', candles_controller_1.getCandleByCategory)
    .patch('/change-candle-name', candles_controller_1.changeCandleName)
    .patch('/change-candle-price', candles_controller_1.changeCandlePrice)
    .post('/add-color', candles_controller_1.addNewColor)
    .delete('/delete-color', candles_controller_1.deleteColor)
    .post('/add-frag', candles_controller_1.addNewFrag)
    .delete('/remove-frag', candles_controller_1.removeFrag)
    .patch('/edit-description', candles_controller_1.editDescription)
    .patch('/edit-type-candle', candles_controller_1.editTypeCandle)
    .patch('/edit-size-candle', candles_controller_1.editSizeCandle)
    .post('/add-candle-image', storage_1.upload.single("my_file"), candles_controller_1.addCandleImage)
    .delete('/delete-image', candles_controller_1.deleteImage);
exports.default = router;
//# sourceMappingURL=candles.route.js.map