import { Schema, model } from "mongoose";

const PaymentSchema = new Schema({
    text: {
        type: String,
        require: [true, "נא למלא טקסט לתשלום"]
    },
})

export const Payment = model("Payment", PaymentSchema)