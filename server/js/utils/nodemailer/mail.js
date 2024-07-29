"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerMail = exports.mailOptions = exports.transporter = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const mailText_1 = require("./mailText");
exports.transporter = nodemailer_1.default.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.MAIL,
        pass: process.env.MAIL_PASS,
    },
});
const renderOrderCandles = (candles) => {
    let html = '';
    candles.forEach((candle) => {
        html += `
        <tr>
            <td>${candle.name}</td>
            <td>${candle.color}</td>
            <td>${candle.fragrance}</td>
            <td>${candle.quantity}</td>
            <td>${candle.price}</td>
            <td>${candle.price * candle.quantity} ש"ח</td>
        </tr>
        `;
    });
    return html;
};
const detailsOrder = (order, mailTitle, details) => {
    const orderNumber = order._id.toString().slice(-5, order._id.length);
    const orderCandles = renderOrderCandles(order.candles);
    const totalPay = (order) => {
        let totalPrice = 0;
        order.candles.forEach((candle) => {
            totalPrice += candle.quantity * candle.price;
        });
        return totalPrice;
    };
    const htmlEmail = (0, mailText_1.mailText)(mailTitle, details, orderCandles, totalPay(order), orderNumber, order.name, order.telNumber);
    return { htmlEmail };
};
const mailOptions = (order) => {
    const mailTitle = "התקבלה הזמנה חדשה מהאתר";
    const details = ``;
    const { htmlEmail } = detailsOrder(order, mailTitle, details);
    return {
        from: process.env.MAIL,
        to: process.env.MAIL,
        cc: [
            `"Maya Art Candles" <${process.env.MAIL_CC}>`
        ],
        subject: "✨✨MayaArt - הזמנה חדשה התקבלה ✨✨",
        html: htmlEmail
    };
};
exports.mailOptions = mailOptions;
const customerMail = (order) => {
    console.log(order);
    const mailTitle = "פירוט הזמנה חדשה מהאתר MAYAART";
    const details = `
     <p>מספר טלפון לבירורים: <a href="tel:0508122000"><b>0508122000</b></a></p>
     <p>אימייל לבירורים: <a href="mailto:mayashahar777@gmail.com"><b>mayashahar777@gmail.com</b></a></p>
     `;
    const { htmlEmail } = detailsOrder(order, mailTitle, details);
    return {
        from: process.env.MAIL,
        to: `${order.email}`,
        subject: "✨✨MayaArt - ההזמנה שלכם התקבלה ✨✨",
        html: htmlEmail
    };
};
exports.customerMail = customerMail;
//# sourceMappingURL=mail.js.map