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
exports.deleteImage = exports.addCandleImage = exports.editSizeCandle = exports.editTypeCandle = exports.editDescription = exports.removeFrag = exports.addNewFrag = exports.deleteColor = exports.addNewColor = exports.changeCandlePrice = exports.changeCandleShape = exports.changeCandleName = void 0;
const candle_model_1 = require("../../model/candle.model");
const uploadFunc_1 = require("../../utils/cloudinary/uploadFunc");
const httpCodes_1 = require("../../utils/httpCodes");
//  /candles/change-candle-name
const changeCandleName = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, id } = req.body;
        yield candle_model_1.Candle.findByIdAndUpdate(id, { $set: { name } });
        return res.json({ continueWork: true, message: "השם עודכן בהצלחה" });
    }
    catch (error) {
        next(error);
    }
});
exports.changeCandleName = changeCandleName;
//  /candles/change-candle-shape
const changeCandleShape = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { shape, id } = req.body;
        yield candle_model_1.Candle.findByIdAndUpdate(id, { $set: { shape } });
        return res.json({ continueWork: true, message: "צורת הנר עודכן בהצלחה" });
    }
    catch (error) {
        next(error);
    }
});
exports.changeCandleShape = changeCandleShape;
//  /candles/change-candle-price
const changeCandlePrice = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, price, salePrice } = req.body;
        yield candle_model_1.Candle.findByIdAndUpdate(id, { $set: { price, salePrice } });
        return res.json({ continueWork: true, message: "המחיר עודכן בהצלחה" });
    }
    catch (error) {
        next(error);
    }
});
exports.changeCandlePrice = changeCandlePrice;
//  /candles/add-color
const addNewColor = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, newColor: { color, hexCode } } = req.body;
        const updatedCandle = yield candle_model_1.Candle.findOneAndUpdate({ _id: id }, { $push: { colors: { color, hexCode } } }, { new: true });
        return res.json({ continueWork: true, message: "הצבע התווסף בהצלחה", colors: updatedCandle.colors });
    }
    catch (error) {
        next(error);
    }
});
exports.addNewColor = addNewColor;
//  /candles/delete-color
const deleteColor = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, colorId } = req.body;
        const updatedCandle = yield candle_model_1.Candle.findOneAndUpdate({ _id: id }, { $pull: { colors: { _id: colorId } } }, { new: true });
        return res.json({ continueWork: true, message: "הצבע הוסר בהצלחה", colors: updatedCandle.colors });
    }
    catch (error) {
        next(error);
    }
});
exports.deleteColor = deleteColor;
//  /candles/add-frag
const addNewFrag = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, newFrag } = req.body;
        const updatedCandle = yield candle_model_1.Candle.findOneAndUpdate({ _id: id }, { $push: { fragrances: newFrag } }, { new: true });
        return res.json({ continueWork: true, message: "הריח התווסף בהצלחה", fragrances: updatedCandle.fragrances });
    }
    catch (error) {
        next(error);
    }
});
exports.addNewFrag = addNewFrag;
//  /candles/remove-frag
const removeFrag = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, frg } = req.body;
        console.log(id, frg);
        const updatedCandle = yield candle_model_1.Candle.findOneAndUpdate({ _id: id }, { $pull: { fragrances: frg } }, { new: true });
        return res.json({ continueWork: true, message: "הריח הוסר בהצלחה", fragrances: updatedCandle.fragrances });
    }
    catch (error) {
        next(error);
    }
});
exports.removeFrag = removeFrag;
//  /candles/edit-description
const editDescription = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, candleDesc } = req.body;
        yield candle_model_1.Candle.findByIdAndUpdate(id, { $set: { description: candleDesc } });
        return res.json({ continueWork: true, message: "תיאור מוצר עודכן בהצלחה" });
    }
    catch (error) {
        next(error);
    }
});
exports.editDescription = editDescription;
//  /candles/edit-type-candle
const editTypeCandle = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, type } = req.body;
        yield candle_model_1.Candle.findByIdAndUpdate(id, { $set: { type } });
        return res.json({ continueWork: true, message: "קטגוריה עודכנה בהצלחה" });
    }
    catch (error) {
        next(error);
    }
});
exports.editTypeCandle = editTypeCandle;
//  /candles/edit-size-candle
const editSizeCandle = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, size } = req.body;
        yield candle_model_1.Candle.findByIdAndUpdate(id, { $set: { size } });
        return res.json({ continueWork: true, message: "גודל מוצר עודכן בהצלחה" });
    }
    catch (error) {
        next(error);
    }
});
exports.editSizeCandle = editSizeCandle;
//  /candles/add-candle-image
const addCandleImage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.query;
        const candle = yield candle_model_1.Candle.findById(id);
        const { pictures } = candle;
        if (pictures.length === 4) {
            return res.status(httpCodes_1.httpCodes.BAD_REQUEST).json({ continueWork: false, message: "לא ניתן לעלות יותר מ4 תמונות" });
        }
        const b64 = Buffer.from(req.file.buffer).toString("base64");
        let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
        const cldRes = yield (0, uploadFunc_1.handleUpload)(dataURI);
        if (!cldRes.secure_url) {
            console.log(`none cldRes.secure_url`);
            return res.status(httpCodes_1.httpCodes.BAD_REQUEST).json({ continueWork: false, message: "שגיא" });
        }
        candle === null || candle === void 0 ? void 0 : candle.pictures.push({ img: cldRes.secure_url });
        yield candle.save().then(doc => console.log(doc));
        return res.json({ continueWork: true, message: "נר נשמר בהצלחה", pictures: candle.pictures });
    }
    catch (error) {
        next(error);
    }
});
exports.addCandleImage = addCandleImage;
//  /candles/delete-image
const deleteImage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, imageId, img } = req.body;
        console.log(img);
        const publicId = (0, uploadFunc_1.getPublicId)(img);
        yield (0, uploadFunc_1.handleDeleteImage)(publicId);
        const updatedCandle = yield candle_model_1.Candle.findOneAndUpdate({ _id: id }, { $pull: { pictures: { _id: imageId } } }, { new: true });
        return res.json({ continueWork: true, message: "התמונה הוסרה בהצלחה", pictures: updatedCandle.pictures });
    }
    catch (error) {
        next(error);
    }
});
exports.deleteImage = deleteImage;
//# sourceMappingURL=editCandle.controller.js.map