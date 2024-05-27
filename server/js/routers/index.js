"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    try {
        return res.send("OK");
    }
    catch (error) {
        return res.send(error);
    }
});
exports.default = router;
