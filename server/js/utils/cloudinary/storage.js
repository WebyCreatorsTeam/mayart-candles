"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const Multer = require("multer");
const storage = new Multer.memoryStorage();
exports.upload = Multer({
    storage
});
//# sourceMappingURL=storage.js.map