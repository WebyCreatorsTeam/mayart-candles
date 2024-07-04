"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.edtiPaymentText = exports.getPaymentText = exports.addPaymentText = void 0;
const payment_model_1 = require("../model/payment.model");
//     /payment/add-payment-text
const addPaymentText = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { text } = req.body;
        const newPaymentText = new payment_model_1.Payment({ text });
        yield newPaymentText.save();
        return res.json({ continueWork: true, message: "הטקסט נשמר בהצלחה" });
    }
    catch (error) {
        next(error);
    }
});
exports.addPaymentText = addPaymentText;
//     /payment/get-payment
const getPaymentText = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const paymentText = yield payment_model_1.Payment.findOne({ _id: "667c47143e1fe81613271580" });
        return res.json({ continueWork: true, paymentText });
    }
    catch (error) {
        next(error);
    }
});
exports.getPaymentText = getPaymentText;
//     /payment/update-payment-text
const edtiPaymentText = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, paymentDesc } = req.body;
        yield payment_model_1.Payment.findByIdAndUpdate(id, { $set: { text: paymentDesc } });
        return res.json({ continueWork: true, message: "הטקסט עודכן בהצלחה" });
    }
    catch (error) {
        next(error);
    }
});
exports.edtiPaymentText = edtiPaymentText;
//# sourceMappingURL=payment.controller.js.map