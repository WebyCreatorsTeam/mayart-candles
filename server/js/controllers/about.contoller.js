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
const uploadFunc_1 = require("../utils/cloudinary/uploadFunc");
const uploadFunc_2 = require("../utils/cloudinary/uploadFunc");
const saveAboutText = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
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
        const publicId = (0, uploadFunc_1.getPublicId)(oldURL);
        const b64 = Buffer.from(req.file.buffer).toString("base64");
        let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
        const { secure_url } = yield (0, uploadFunc_2.imageUpdater)(publicId, dataURI);
        yield about_model_1.About.getAboutImages(id, secure_url, oldId);
        return res.json({ continueWork: true, message: "התמונה עודכנה בהצלחה", secure_url });
    }
    catch (error) {
        next(error);
    }
});
exports.hendleAboutImageReplace = hendleAboutImageReplace;
//# sourceMappingURL=about.contoller.js.map