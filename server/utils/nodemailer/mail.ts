// // const nodemailer = require("nodemailer");
import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.MAIL,
        pass: process.env.MAIL_PASS,
    },
});

const renderOrderCandles = (candles: any) => {
    let html = ''

    candles.forEach((candle: any) => {
        html += `
        <tr>
            <td>${candle.name}</td>
            <td>${candle.color}</td>
            <td>${candle.fragrance}</td>
            <td>${candle.quantity}</td>
            <td>${candle.price}</td>
            <td>${candle.price * candle.quantity} ש"ח</td>
        </tr>
        `
    })
    return html
}

export const mailOptions = (order: any) => {
    console.log(order)

    const orderNumber = order._id.toString().slice(-5, order._id.length)
    const orderCandles = renderOrderCandles(order.candles)

    const totalPay = (order: any) => {
        let totalPrice = 0;
        order.candles.forEach((candle: any) => {
            totalPrice += candle.quantity * candle.price
        })
        return totalPrice
    }

    return {
        from: process.env.MAIL,
        to: process.env.MAIL,
        cc: [
            `"Maya Art Candles" <${process.env.MAIL_CC}>`
        ],
        subject: "✨✨MayaArt - הזמנה חדשה התקבלה ✨✨",
        html: `
        <head>
            <style>
                table, th, td {
                    border:1px solid black;
                    font-size: 18px;
                }

                p {
                    font-size: 18px;
                }
            </style>
        </head>
        <div style="text-align: center;" dir="rtl">
            <h1 style="color: rgb(34,139,34)">התקבלה הזמנה חדשה מהאתר</h1>
                <div>
                    <p>מספר הזמנה: <b>${orderNumber}</b></p>
                    <p>שם המזמין: <b>${order.name}</b></p>
                    <p>מספר טלפון: <a href="tel:${order.telNumber}"><b>${order.telNumber}</b></a></p>
                <div>
                <h2>פירוט הזמנה</h2>
                <table style="width:100%">
                    <thead>
                        <tr>
                            <td><b>מוצר</b></td>
                            <td><b>צבע</b></td>
                            <td><b>ריח</b></td>
                            <td><b>כמות</b></td>
                            <td><b>מחיר</b></td>
                            <td><b>לתשלום</b></td>
                        </tr>
                    </thead>
                    <tbody>
                        ${orderCandles}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td class="total"><b>סה"כ לתשלום</b></td>
                            <td><b>${totalPay(order)} ש"ח</b></td>
                        </tr>
                    </tfoot>
                </table>
            </div> 
        </div>`}
}
