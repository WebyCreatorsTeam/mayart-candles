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
exports.removeCandle = exports.addCandle = void 0;
const candle_model_1 = require("../../model/candle.model");
//      /candles/save-candle
const addCandle = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { candle } = req.query;
        // const file = req.query
        console.log(`-------------------------data---------------------------`);
        console.log(candle);
        console.log(`-------------------------file---------------------------`);
        console.log(req.files);
        // const b64 = Buffer.from(req.file!.buffer).toString("base64");
        // let dataURI = "data:" + req.file!.mimetype + ";base64," + b64;
        // console.log(dataURI)
        // const newCandle = new Candle(data)
        // await newCandle.save()
        // return res.json({ continueWork: true, message: "הנר נשמר" })
    }
    catch (error) {
        next(error);
    }
});
exports.addCandle = addCandle;
//      /candles/remove-candle
const removeCandle = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.body;
        yield candle_model_1.Candle.findByIdAndDelete(id);
        return res.json({ continueWork: true, message: "הנר נמחק" });
    }
    catch (error) {
        next(error);
    }
});
exports.removeCandle = removeCandle;
//# sourceMappingURL=candles.controller.js.map