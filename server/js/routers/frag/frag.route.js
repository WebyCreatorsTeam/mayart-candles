"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const frag_controller_1 = require("../../controllers/frag.controller");
const express_1 = require("express");
const router = (0, express_1.Router)();
router
    .post('/save-frag', frag_controller_1.saveCandleFrag)
    .delete('/delete-frag', frag_controller_1.deleteFrag);
exports.default = router;
//# sourceMappingURL=frag.route.js.map