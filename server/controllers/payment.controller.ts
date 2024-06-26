import { NextFunction, Request, Response } from "express"
import { Payment } from "../model/payment.model"

//     /payment/add-payment-text
export const addPaymentText = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { text } = req.body
        const newPaymentText = new Payment({ text })
        await newPaymentText.save()
        return res.json({ continueWork: true, message: "הטקסט נשמר בהצלחה" })
    } catch (error) {
        next(error)
    }
}

//     /payment/get-payment
export const getPaymentText = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const paymentText = await Payment.findOne({ _id: "667c47143e1fe81613271580" });
        console.log(paymentText)
        return res.json({ continueWork: true, paymentText })
    } catch (error) {
        next(error)
    }
}

//     /payment/update-payment-text
export const edtiPaymentText = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id, paymentDesc } = req.body
        await Payment.findByIdAndUpdate(id, { $set: { text: paymentDesc } })
        return res.json({ continueWork: true, message: "הטקסט עודכן בהצלחה" })
    } catch (error) {
        next(error)
    }
}