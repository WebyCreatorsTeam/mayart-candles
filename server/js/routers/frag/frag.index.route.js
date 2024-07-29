"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const admin_login_1 = require("../../middlewares/admin.login");
const frag_controller_1 = require("../../controllers/frag.controller");
const frag_route_1 = __importDefault(require("./frag.route"));
router
    .get('/get-frags', frag_controller_1.getAllCandleFrags)
    .use('/', admin_login_1.userIsLogin, frag_route_1.default);
exports.default = router;
//# sourceMappingURL=frag.index.route.js.map