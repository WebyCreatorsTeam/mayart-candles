"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const mongoose_1 = require("mongoose");
const CategorySchema = new mongoose_1.Schema({
    opt: {
        type: String,
        require: [true, "נא למלא קטיגוריה"]
    },
});
exports.Category = (0, mongoose_1.model)("Category", CategorySchema);
//# sourceMappingURL=category.model.js.map