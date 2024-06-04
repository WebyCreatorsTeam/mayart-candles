"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.About = void 0;
const mongoose_1 = require("mongoose");
const AboutSchema = new mongoose_1.Schema({
    title: {
        type: String,
        require: [true, "נא למלא את הכותרת"]
    },
    desc: {
        type: String,
        require: [true, "נא למלא תוכן הטקסט"],
    },
    images: {
        type: [String]
    }
});
exports.About = (0, mongoose_1.model)("About", AboutSchema);
//# sourceMappingURL=about.model.js.map