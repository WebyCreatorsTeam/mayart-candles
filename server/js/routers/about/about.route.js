"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const about_contoller_1 = require("../../controllers/about.contoller");
const storage_1 = require("../../utils/cloudinary/storage");
router
    .patch('/update-about-title', about_contoller_1.edtiAboutTitle)
    .patch('/update-about-desc', about_contoller_1.edtiAboutDesc)
    .patch('/update-about-image', storage_1.upload.single("my_file"), about_contoller_1.hendleAboutImageReplace)
    .get('/get-about', about_contoller_1.getAboutText);
exports.default = router;
// .post('/save-about', saveAboutText)
// .post("/upload", upload.array('images', 5), uploadToCloudinary, async (req: Request, res: Response) => {
//     try {
//         const cloudinaryUrls = req.body.cloudinaryUrls;
//         if (cloudinaryUrls.length === 0) {
//             console.error('No Cloudinary URLs found.');
//             return res.status(500).send('Internal Server Error');
//         }
//         const images = cloudinaryUrls;
//         return res.send(images)
//     } catch (error) {
//         return res.status(500).json({ error });
//     }
// });
//# sourceMappingURL=about.route.js.map