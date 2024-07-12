import { NextFunction, Request, Response } from "express";
import { Order } from "../../model/order/order.model";
import {transporter, mailOptions} from "../../utils/nodemailer/mail"
// import moment from "moment";

//  /orders/send-message

export const saveOrder = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = req.body;
        // console.log(data)
        const newOrder = new Order({ ...data })
        // console.log(moment().format())
        // Order.index
        // console.log(Order.getIndexes())
        await newOrder.save()

        await new Promise((resolve, reject) => {
            console.log(`befote mail`)
            transporter.sendMail(mailOptions(newOrder), (error, info) => {
                console.log(`email transporter enter`)
                if (error) {
                    console.log(`email transporter enter error`)
                    console.error("Error sending email: ", error);
                    reject(error)
                } else {
                    console.log("Email sent: ", info.response);
                    console.log(`email transporter enter sent`)
                    resolve(info.response)
                }
            });
            console.log(`after mail`)
        })

        return res.json({ continueWork: true, message: "הזמנה נשלחה, נחזור בהקדם" })
    } catch (error) {
        next(error)
    }
}

//      /orders/get-orders

export const getOrder = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const order = await Order.find({})
        return res.json({ continueWork: true, order })
    } catch (error) {
        next(error)
    }
}

//      /order/delete-order
export const deleteOrder = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.body
        await Order.findByIdAndDelete(id)
        return res.json({ continueWork: true, message: "ההזמנה נמחקה בהצלחה" })
    } catch (error) {
        next(error)
    }
}