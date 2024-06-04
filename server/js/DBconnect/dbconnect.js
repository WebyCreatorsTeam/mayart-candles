"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbconnect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const uri = process.env.MONGODB_URI || "";
const dbconnect = () => {
    try {
        mongoose_1.default.connect(uri).then(() => {
            console.log(`db connected`);
        });
    }
    catch (error) {
        console.log(error);
    }
};
exports.dbconnect = dbconnect;
//# sourceMappingURL=dbconnect.js.map