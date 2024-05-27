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
exports.addCandle = exports.getOneCandle = exports.getAllCandles = void 0;
const candle_model_1 = require("../model/candle.model");
const getAllCandles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allCandles = yield candle_model_1.Candle.find({});
        return res.status(200).json(allCandles);
    }
    catch (error) {
        return res.send(error);
    }
});
exports.getAllCandles = getAllCandles;
const getOneCandle = (req, res) => {
    try {
        return res.send("One Candle");
    }
    catch (error) {
        return res.send(error);
    }
};
exports.getOneCandle = getOneCandle;
const addCandle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const newCandle = new candle_model_1.Candle(data);
        yield newCandle.save();
        return res.status(200).json({ text: "candle saved" });
    }
    catch (error) {
        return res.send(error);
    }
});
exports.addCandle = addCandle;
//# sourceMappingURL=candles.controller.js.map