"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const category_contoller_1 = require("../../controllers/category.contoller");
const admin_login_1 = require("../../middlewares/admin.login");
const category_route_1 = __importDefault(require("./category.route"));
router
    .get('/get-categories', category_contoller_1.getAllCategosies)
    .use('/', admin_login_1.userIsLogin, category_route_1.default);
exports.default = router;
//# sourceMappingURL=category.index.route.js.map