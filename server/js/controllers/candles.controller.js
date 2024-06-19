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
exports.editSizeCandle = exports.editTypeCandle = exports.editDescription = exports.removeFrag = exports.addNewFrag = exports.deleteColor = exports.addNewColor = exports.changeCandlePrice = exports.changeCandleName = exports.getCandleByCategory = exports.addCandle = exports.getOneCandle = exports.getAllCandles = void 0;
const candle_model_1 = require("../model/candle.model");
//      /candles/get-candles
const getAllCandles = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allCandles = yield candle_model_1.Candle.find({});
        return res.json({ continueWork: true, allCandles });
    }
    catch (error) {
        next(error);
    }
});
exports.getAllCandles = getAllCandles;
//      /candles/get-one-candle
const getOneCandle = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.body;
        const candle = yield candle_model_1.Candle.findById(id);
        console.log(candle);
        return res.json({ continueWork: true, candle });
    }
    catch (error) {
        next(error);
    }
});
exports.getOneCandle = getOneCandle;
//      /candles/save-candle
const addCandle = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const newCandle = new candle_model_1.Candle(data);
        yield newCandle.save();
        return res.json({ continueWork: true, text: "candle saved" });
    }
    catch (error) {
        next(error);
    }
});
exports.addCandle = addCandle;
//  /candles/get-candles-by-category
const getCandleByCategory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { categoryType } = req.body;
        let categoryCandles;
        if (categoryType == "כל הנרות") {
            categoryCandles = yield candle_model_1.Candle.find({});
        }
        else {
            categoryCandles = yield candle_model_1.Candle.find({
                $or: [
                    { type: categoryType },
                    { size: categoryType }
                ]
            });
        }
        return res.json({ continueWork: true, categoryCandles });
    }
    catch (error) {
        next(error);
    }
});
exports.getCandleByCategory = getCandleByCategory;
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
//# sourceMappingURL=candles.controller.js.map