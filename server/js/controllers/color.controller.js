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
exports.deleteColor = exports.getAllCandleColors = exports.saveCandleColor = void 0;
const color_model_1 = require("../model/color.model");
const saveCandleColor = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const newColor = new color_model_1.Color(data);
        yield newColor.save();
        return res.json({ continueWork: true, message: "הצבע נשמר", newColor });
    }
    catch (error) {
        next(error);
    }
});
exports.saveCandleColor = saveCandleColor;
const getAllCandleColors = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const colors = yield color_model_1.Color.find({});
        return res.json({ continueWork: true, colors });
    }
    catch (error) {
        next(error);
    }
});
exports.getAllCandleColors = getAllCandleColors;
const deleteColor = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.body;
        yield color_model_1.Color.findByIdAndDelete(id);
        return res.json({ continueWork: true, message: "הצבע נמחק" });
    }
    catch (error) {
        next(error);
    }
});
exports.deleteColor = deleteColor;
//# sourceMappingURL=color.controller.js.map