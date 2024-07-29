"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const color_controller_1 = require("../../controllers/color.controller");
router
    .post('/save-color', color_controller_1.saveCandleColor)
    .delete('/delete-color', color_controller_1.deleteColor);
exports.default = router;
//# sourceMappingURL=color.route.js.map