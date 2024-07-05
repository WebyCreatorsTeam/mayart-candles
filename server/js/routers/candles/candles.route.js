"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const storage_1 = require("../../utils/cloudinary/storage");
const candles_controller_1 = require("../../controllers/candle/candles.controller");
const editCandle_controller_1 = require("../../controllers/candle/editCandle.controller");
const router = (0, express_1.Router)();
router
    .post('/save-candle', storage_1.upload.array("my_many_files", 4), candles_controller_1.addCandle)
    .delete('/remove-candle', candles_controller_1.removeCandle)
    .patch('/change-candle-name', editCandle_controller_1.changeCandleName)
    .patch('/change-candle-shape', editCandle_controller_1.changeCandleShape)
    .patch('/change-candle-price', editCandle_controller_1.changeCandlePrice)
    .post('/add-color', editCandle_controller_1.addNewColor)
    .delete('/delete-color', editCandle_controller_1.deleteColor)
    .post('/add-frag', editCandle_controller_1.addNewFrag)
    .delete('/remove-frag', editCandle_controller_1.removeFrag)
    .patch('/edit-description', editCandle_controller_1.editDescription)
    .patch('/edit-type-candle', editCandle_controller_1.editTypeCandle)
    .patch('/edit-size-candle', editCandle_controller_1.editSizeCandle)
    .post('/add-candle-image', storage_1.upload.single("my_file"), editCandle_controller_1.addCandleImage)
    .delete('/delete-image', editCandle_controller_1.deleteImage);
exports.default = router;
//# sourceMappingURL=candles.route.js.map