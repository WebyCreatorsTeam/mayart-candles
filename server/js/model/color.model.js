"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Color = void 0;
const mongoose_1 = require("mongoose");
const ColorSchema = new mongoose_1.Schema({
    color: {
        type: String,
        require: [true, "נא למלא שם הצבע"],
    },
    hexCode: {
        type: String,
        require: [true, "נא לבחור צבע"],
    }
});
exports.Color = (0, mongoose_1.model)("Color", ColorSchema);
//# sourceMappingURL=color.model.js.map