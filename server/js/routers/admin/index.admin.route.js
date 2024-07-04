"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const admin_route_1 = __importDefault(require("./admin.route"));
const admin_contoller_1 = require("../../controllers/admin.contoller");
const admin_login_1 = require("../../middlewares/admin.login");
router
    .post('/login-admin', admin_contoller_1.loginAdmin)
    .use('/', admin_login_1.userIsLogin, admin_route_1.default);
exports.default = router;
//# sourceMappingURL=index.admin.route.js.map