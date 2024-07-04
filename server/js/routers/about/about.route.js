"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const about_contoller_1 = require("../../controllers/about.contoller");
const storage_1 = require("../../utils/cloudinary/storage");
router
    .patch('/update-about-title', about_contoller_1.edtiAboutTitle)
    .patch('/update-about-desc', about_contoller_1.edtiAboutDesc)
    .patch('/update-about-image', storage_1.upload.single("my_file"), about_contoller_1.hendleAboutImageReplace);
// .get('/get-about', getAboutText)
exports.default = router;
//# sourceMappingURL=about.route.js.map