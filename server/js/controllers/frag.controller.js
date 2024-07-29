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
exports.deleteFrag = exports.getAllCandleFrags = exports.saveCandleFrag = void 0;
const frag_model_1 = require("../model/frag.model");
// import { Color } from "../model/color.model";
const saveCandleFrag = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { fragrance } = req.body;
        const newFrag = new frag_model_1.Frag({ name: fragrance });
        yield newFrag.save();
        return res.json({ continueWork: true, message: "הצבע נשמר", newFrag });
    }
    catch (error) {
        next(error);
    }
});
exports.saveCandleFrag = saveCandleFrag;
const getAllCandleFrags = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const frags = yield frag_model_1.Frag.find({});
        return res.json({ continueWork: true, frags });
    }
    catch (error) {
        next(error);
    }
});
exports.getAllCandleFrags = getAllCandleFrags;
const deleteFrag = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.body;
        yield frag_model_1.Frag.findByIdAndDelete(id);
        return res.json({ continueWork: true, message: "הריח נמחק" });
    }
    catch (error) {
        next(error);
    }
});
exports.deleteFrag = deleteFrag;
//# sourceMappingURL=frag.controller.js.map