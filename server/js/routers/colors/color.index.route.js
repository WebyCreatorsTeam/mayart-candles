"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const admin_login_1 = require("../../middlewares/admin.login");
const color_controller_1 = require("../../controllers/color.controller");
const color_route_1 = __importDefault(require("./color.route"));
router
    .get('/get-colors', color_controller_1.getAllCandleColors)
    .use('/', admin_login_1.userIsLogin, color_route_1.default);
exports.default = router;
//# sourceMappingURL=color.index.route.js.map