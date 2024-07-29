"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Frag = void 0;
const mongoose_1 = require("mongoose");
const FragSchema = new mongoose_1.Schema({
    name: {
        type: String,
        require: [true, "נא למלא ריח"],
    }
});
exports.Frag = (0, mongoose_1.model)("Frag", FragSchema);
//# sourceMappingURL=frag.model.js.map