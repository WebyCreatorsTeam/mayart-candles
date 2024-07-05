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
exports.handleDeleteImage = exports.imageUpdater = exports.handleDeleteMany = exports.handleUpload = exports.getPublicId = void 0;
// const cloudinary = require("cloudinary").v2;
const cloudinary = require("cloudinary").v2;
const getPublicId = (imageURL) => imageURL.split("/").pop().split(".")[0];
exports.getPublicId = getPublicId;
// const resizedBuffer: Buffer = await sharp(file.buffer)
//     .resize({ width: your - width, height: your - height })
//     .toBuffer();
const handleUpload = (file) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield cloudinary.uploader.upload(file, {
            resource_type: "auto",
            folder: 'mayart'
        });
        return res;
    }
    catch (error) {
        console.log(error);
        return error;
    }
});
exports.handleUpload = handleUpload;
const handleDeleteMany = (publicIds) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield cloudinary.api.delete_resources(publicIds);
        return res;
    }
    catch (error) {
        console.log(error);
        return error;
    }
});
exports.handleDeleteMany = handleDeleteMany;
const imageUpdater = (imagePublicId, imagePath) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield cloudinary.uploader.upload(imagePath, {
            public_id: `mayart/${imagePublicId}`
        });
        return result;
    }
    catch (error) {
        console.log(error);
        return error;
    }
});
exports.imageUpdater = imageUpdater;
const handleDeleteImage = (imageId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield cloudinary.uploader.destroy(`mayart/${imageId}`);
        console.log(result);
        return result;
    }
    catch (error) {
        console.log(error);
        return error;
    }
});
exports.handleDeleteImage = handleDeleteImage;
//# sourceMappingURL=uploadFunc.js.map