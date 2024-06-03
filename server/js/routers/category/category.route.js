"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const category_contoller_1 = require("../../controllers/category.contoller");
router
    .get('/get-categories', category_contoller_1.getAllCategosies)
    .post('/save-category', category_contoller_1.addCategory);
exports.default = router;
//# sourceMappingURL=category.route.js.map