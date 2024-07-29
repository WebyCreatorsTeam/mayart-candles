"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const mongoose_1 = require("mongoose");
const OrderSchema = new mongoose_1.Schema({
    name: {
        type: String,
        require: [true, "נא למלא שם מלא"]
    },
    telNumber: {
        type: String,
        require: [true, "נא למלא מספר טלפון"],
    },
    email: {
        type: String,
        require: [true, "נא למלא אימייל"],
    },
    candles: [{
            name: { type: String },
            color: { type: String },
            fragrance: { type: String },
            description: { type: String },
            quantity: { type: Number },
            price: { type: Number }
        }],
    createdAt: {
        type: Date,
        default: () => new Date(Date.now() + 3 * 60 * 60 * 1000),
        index: { expires: '1m' },
    },
});
// OrderSchema.index({ createdAt: 1 }, { expireAfterSeconds: 60 });
exports.Order = (0, mongoose_1.model)("Order", OrderSchema);
//# sourceMappingURL=order.model.js.map