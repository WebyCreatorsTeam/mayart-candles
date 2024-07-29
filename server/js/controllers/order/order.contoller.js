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
exports.deleteOrder = exports.getOrder = exports.saveOrder = void 0;
const order_model_1 = require("../../model/order/order.model");
const mail_1 = require("../../utils/nodemailer/mail");
// import moment from "moment";
//  /orders/send-message
const saveOrder = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        console.log(data.email);
        const newOrder = new order_model_1.Order(Object.assign({}, data));
        yield newOrder.save();
        yield new Promise((resolve, reject) => {
            // console.log(`befote mail`)
            mail_1.transporter.sendMail((0, mail_1.mailOptions)(newOrder), (error, info) => {
                // console.log(`email transporter enter`)
                if (error) {
                    // console.log(`email transporter enter error`)
                    console.error("Error sending email: ", error);
                    reject(error);
                }
                else {
                    console.log("Email sent: ", info.response);
                    // console.log(`email transporter enter sent`)
                    resolve(info.response);
                }
            });
            mail_1.transporter.close();
            // console.log(`after mail`)
        });
        yield new Promise((resolve, reject) => {
            // console.log(`before customer mail`)
            mail_1.transporter.sendMail((0, mail_1.customerMail)(newOrder), (error, info) => {
                if (error) {
                    // console.log(`email transporter enter error`)
                    console.error("Error sending email: ", error);
                    reject(error);
                }
                else {
                    console.log("Email sent: ", info.response);
                    // console.log(`email transporter enter sent`)
                    resolve(info.response);
                }
            });
            mail_1.transporter.close();
            // console.log(`after mail`)
        });
        return res.json({ continueWork: true, message: "הזמנה נשלחה, נחזור בהקדם" });
    }
    catch (error) {
        next(error);
    }
});
exports.saveOrder = saveOrder;
//  /orders/get-orders
const getOrder = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = yield order_model_1.Order.find({});
        return res.json({ continueWork: true, order });
    }
    catch (error) {
        next(error);
    }
});
exports.getOrder = getOrder;
//      /order/delete-order
const deleteOrder = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.body;
        yield order_model_1.Order.findByIdAndDelete(id);
        return res.json({ continueWork: true, message: "ההזמנה נמחקה בהצלחה" });
    }
    catch (error) {
        next(error);
    }
});
exports.deleteOrder = deleteOrder;
//# sourceMappingURL=order.contoller.js.map