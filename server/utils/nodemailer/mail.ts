import nodemailer from "nodemailer";
import { mailText } from "./mailText";

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

const detailsOrder = (order: any, mailTitle: string, details: string) => {
    const orderNumber = order._id.toString().slice(-5, order._id.length)
    const orderCandles = renderOrderCandles(order.candles)

    const totalPay = (order: any) => {
        let totalPrice = 0;
        order.candles.forEach((candle: any) => {
            totalPrice += candle.quantity * candle.price
        })
        return totalPrice
    }

    const htmlEmail = mailText(mailTitle, details, orderCandles, totalPay(order), orderNumber, order.name, order.telNumber)

    return { htmlEmail }
}

export const mailOptions = (order: any) => {
    const mailTitle = "התקבלה הזמנה חדשה מהאתר"
    const details = ``
    const { htmlEmail } = detailsOrder(order, mailTitle, details)

    return {
        from: process.env.MAIL,
        to: process.env.MAIL,
        cc: [
            `"Maya Art Candles" <${process.env.MAIL_CC}>`
        ],
        subject: "✨✨MayaArt - הזמנה חדשה התקבלה ✨✨",
        html: htmlEmail
    }
}

export const customerMail = (order: any) => {
    console.log(order)
    const mailTitle = "פירוט הזמנה חדשה מהאתר MAYAART"
    const details = `
     <p>מספר טלפון לבירורים: <a href="tel:0508122000"><b>0508122000</b></a></p>
     <p>אימייל לבירורים: <a href="mailto:mayashahar777@gmail.com"><b>mayashahar777@gmail.com</b></a></p>
     `
    const { htmlEmail } = detailsOrder(order, mailTitle, details)

    return {
        from: process.env.MAIL,
        to: `${order.email}`,
        subject: "✨✨MayaArt - ההזמנה שלכם התקבלה ✨✨",
        html: htmlEmail
    }
}