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
exports.getCandleByCategory = exports.addCandle = exports.getOneCandle = exports.getAllCandles = void 0;
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
//# sourceMappingURL=candles.controller.js.map