"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const admin_contoller_1 = require("../../controllers/admin.contoller");
const router = (0, express_1.Router)();
router
    .post('/reg-admin', admin_contoller_1.registAdmin)
    // .post('/login-admin', loginAdmin)
    .get('/all-admins', admin_contoller_1.getAllAdmins)
    .delete('/remove-admin', admin_contoller_1.removeAdmin);
exports.default = router;
//# sourceMappingURL=admin.route.js.map