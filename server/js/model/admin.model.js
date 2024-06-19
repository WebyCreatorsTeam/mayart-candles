"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = void 0;
const mongoose_1 = require("mongoose");
const AdminSchema = new mongoose_1.Schema({
    name: {
        type: String,
        require: [true, "נא למלא שם משתמש"]
    },
    email: {
        type: String,
        require: [true, "נא למלא אימייל"],
        lowercase: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        require: [true, "נא למלא סיסמא"],
    },
    role: {
        type: String,
        default: "user",
        // require:[true]
    }
});
exports.Admin = (0, mongoose_1.model)("Admin", AdminSchema);
//# sourceMappingURL=admin.model.js.map