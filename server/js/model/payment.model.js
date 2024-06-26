"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
const mongoose_1 = require("mongoose");
const PaymentSchema = new mongoose_1.Schema({
    text: {
        type: String,
        require: [true, "נא למלא טקסט לתשלום"]
    },
});
exports.Payment = (0, mongoose_1.model)("Payment", PaymentSchema);
//# sourceMappingURL=payment.model.js.map