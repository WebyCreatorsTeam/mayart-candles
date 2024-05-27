"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const candles_1 = __importDefault(require("./routers/candles/candles"));
const dbconnect_1 = require("./DBconnect/dbconnect");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 7575;
(0, dbconnect_1.dbconnect)();
app.use(express_1.default.json());
app.get('/', (req, res) => {
    try {
        return res.send("OK");
    }
    catch (error) {
        return res.send(error);
    }
});
app.use("/candles", candles_1.default);
app.listen(PORT, () => {
    console.log(`listen on http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map