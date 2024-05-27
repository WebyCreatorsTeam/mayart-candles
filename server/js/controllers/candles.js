"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOneCandle = exports.getAllCandles = void 0;
const getAllCandles = (req, res) => {
    try {
        return res.send("All ccccc");
    }
    catch (error) {
        return res.send(error);
    }
};
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
//# sourceMappingURL=candles.js.map