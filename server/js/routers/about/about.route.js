"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const about_contoller_1 = require("../../controllers/about.contoller");
router
    .post('/save-about', about_contoller_1.saveAboutText)
    .get('/get-about', about_contoller_1.getAboutText)
    .post("/upload", about_contoller_1.upload.array('images', 5), about_contoller_1.uploadToCloudinary, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cloudinaryUrls = req.body.cloudinaryUrls;
        if (cloudinaryUrls.length === 0) {
            console.error('No Cloudinary URLs found.');
            return res.status(500).send('Internal Server Error');
        }
        const images = cloudinaryUrls;
        return res.send(images);
    }
    catch (error) {
        return res.status(500).json({ error });
    }
}));
exports.default = router;
//# sourceMappingURL=about.route.js.map