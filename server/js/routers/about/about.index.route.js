"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const about_contoller_1 = require("../../controllers/about.contoller");
const admin_login_1 = require("../../middlewares/admin.login");
const about_route_1 = __importDefault(require("./about.route"));
router
    .get('/get-about', about_contoller_1.getAboutText)
    .use('/', admin_login_1.userIsLogin, about_route_1.default);
exports.default = router;
//# sourceMappingURL=about.index.route.js.map