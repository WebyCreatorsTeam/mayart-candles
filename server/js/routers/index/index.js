"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const candles_route_1 = __importDefault(require("../candles/candles.route"));
const admin_route_1 = __importDefault(require("../admin/admin.route"));
const category_route_1 = __importDefault(require("../category/category.route"));
router.get('/status', (req, res) => res.sendStatus(200));
router
    .use("/admin", admin_route_1.default)
    .use("/candles", candles_route_1.default)
    .use('/categories', category_route_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map