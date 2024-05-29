"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const admin_contoller_1 = require("../../controllers/admin.contoller");
const router = (0, express_1.Router)();
router.post('/login-admin', admin_contoller_1.loginAdmin);
router.post('/reg-admin', admin_contoller_1.registAdmin);
router.get('/all-admins', admin_contoller_1.getAllAdmins);
exports.default = router;
//# sourceMappingURL=admin.route.js.map