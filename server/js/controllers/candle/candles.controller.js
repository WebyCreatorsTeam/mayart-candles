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
const uploadFunc_1 = require("../../utils/cloudinary/uploadFunc");
//      /candles/save-candle
const addCandle = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const candleImages = [];
        const images = req.files;
        const { candle } = req.body;
        const candleObj = JSON.parse(candle.toString());
        for (let i = 0; i < images.length; i++) {
            const b64 = Buffer.from(images[i].buffer).toString("base64");
            let dataURI = "data:" + images[i].mimetype + ";base64," + b64;
            const { secure_url } = yield (0, uploadFunc_1.handleUpload)(dataURI);
            candleImages.push({ img: secure_url });
        }
        const data = Object.assign(Object.assign({}, candleObj), { pictures: candleImages });
        console.log(data);
        const newCandle = new candle_model_1.Candle(data);
        yield newCandle.save();
        return res.json({ continueWork: true, message: "הנר נשמר" });
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
        const candle = yield candle_model_1.Candle.findById(id);
        const { pictures } = candle;
        const picturesId = pictures.map((img) => { return `mayart/${(0, uploadFunc_1.getPublicId)(img.img)}`; });
        console.log(picturesId);
        const aaa = yield (0, uploadFunc_1.handleDeleteMany)(picturesId);
        console.log(aaa);
        yield candle_model_1.Candle.findByIdAndDelete(id);
        return res.json({ continueWork: true, message: "הנר נמחק" });
    }
    catch (error) {
        next(error);
    }
});
exports.removeCandle = removeCandle;
//# sourceMappingURL=candles.controller.js.map