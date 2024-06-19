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
exports.hendleAboutImageReplace = exports.edtiAboutDesc = exports.edtiAboutTitle = exports.getAboutText = exports.saveAboutText = void 0;
const about_model_1 = require("../model/about.model");
// import multer, { Multer } from 'multer';
// import {
//     v2 as cloudinary, UploadApiResponse,
//     UploadApiErrorResponse
// } from 'cloudinary';
// import sharp from 'sharp';
const file_1 = require("../utils/file");
const file_2 = require("../utils/file");
// cloudinary.config({
//     cloud_name: process.env.CLOUD_NAME,
//     api_key: process.env.CLOUD_KEY,
//     api_secret: process.env.CLOUD_SECRET
// });
// interface CloudinaryFile extends Express.Multer.File {
//     buffer: Buffer;
// }
// const storage = multer.memoryStorage();
// export const upload: Multer = multer({ storage: storage });
// export const uploadToCloudinary = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const files: CloudinaryFile[] = req.files as CloudinaryFile[];
//         if (!files || files.length === 0) {
//             return next(new Error('No files provided'));
//         }
//         const cloudinaryUrls: string[] = [];
//         for (const file of files) {
//             const resizedBuffer: Buffer = await sharp(file.buffer)
//                 .resize({ width: 800, height: 600 })
//                 .toBuffer();
//             const uploadStream = cloudinary.uploader.upload_stream(
//                 {
//                     resource_type: 'auto',
//                     folder: 'your-cloudinary-folder-name',
//                 } as any,
//                 (err: UploadApiErrorResponse | undefined, result: UploadApiResponse | undefined) => {
//                     if (err) {
//                         console.error('Cloudinary upload error:', err);
//                         return next(err);
//                     }
//                     if (!result) {
//                         console.error('Cloudinary upload error: Result is undefined');
//                         return next(new Error('Cloudinary upload result is undefined'));
//                     }
//                     cloudinaryUrls.push(result.secure_url);
//                     if (cloudinaryUrls.length === files.length) {
//                         //All files processed now get your images here
//                         req.body.cloudinaryUrls = cloudinaryUrls;
//                         next();
//                     }
//                 }
//             );
//             uploadStream.end(resizedBuffer);
//         }
//     } catch (error) {
//         console.error('Error in uploadToCloudinary middleware:', error);
//         next(error);
//     }
// };
// const resizedBuffer: Buffer = await sharp(file.buffer)
//     .resize({ width: your - width, height: your - height })
//     .toBuffer();
// export const handleUpload = async (file) => {
//     const res = await cloudinary.uploader.upload(file, {
//         resource_type: "auto",
//         folder: 'mayart'
//     });
//     return res;
// }
//     /about/save-about
const saveAboutText = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        // const b64 = Buffer.from(req.file.buffer).toString("base64");
        // let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
        // const cldRes = await handleUpload(dataURI);
        const newAbout = new about_model_1.About(data);
        yield newAbout.save();
        return res.json({ continueWork: true, text: "הטקסט נשמר" });
    }
    catch (error) {
        next(error);
    }
});
exports.saveAboutText = saveAboutText;
//     /about/get-about
const getAboutText = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const aboutText = yield about_model_1.About.findOne({ _id: "665f1cc1a8ae36066076200a" });
        return res.json({ continueWork: true, aboutText });
    }
    catch (error) {
        next(error);
    }
});
exports.getAboutText = getAboutText;
//     /about/update-about-title
const edtiAboutTitle = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, aboutTitle } = req.body;
        console.log(id, aboutTitle);
        yield about_model_1.About.findByIdAndUpdate(id, { $set: { title: aboutTitle } });
        return res.json({ continueWork: true, message: "הכותרת עודכנה בהצלחה" });
    }
    catch (error) {
        next(error);
    }
});
exports.edtiAboutTitle = edtiAboutTitle;
//     /about/update-about-desc
const edtiAboutDesc = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, aboutDesc } = req.body;
        console.log(id, aboutDesc);
        yield about_model_1.About.findByIdAndUpdate(id, { $set: { desc: aboutDesc } });
        return res.json({ continueWork: true, message: "הכותרת עודכנה בהצלחה" });
    }
    catch (error) {
        next(error);
    }
});
exports.edtiAboutDesc = edtiAboutDesc;
//     /about/update-about-image
const hendleAboutImageReplace = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, oldURL, oldId } = req.query;
        const publicId = (0, file_1.getPublicId)(oldURL);
        const b64 = Buffer.from(req.file.buffer).toString("base64");
        let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
        const { secure_url } = yield (0, file_2.imageUpdater)(publicId, dataURI);
        yield about_model_1.About.getAboutImages(id, secure_url, oldId);
        return res.json({ continueWork: true, message: "התמונה עודכנה בהצלחה", secure_url });
    }
    catch (error) {
        next(error);
    }
});
exports.hendleAboutImageReplace = hendleAboutImageReplace;
//# sourceMappingURL=about.contoller.js.map