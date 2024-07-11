import { Schema, model } from "mongoose";

const OrderSchema = new Schema({
    name: {
        type: String,
        require: [true, "נא למלא שם מלא"]
    },
    telNumber: {
        type: String,
        require: [true, "נא למלא מספר טלפון"],
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
})

// OrderSchema.index({ createdAt: 1 }, { expireAfterSeconds: 60 });

export const Order = model("Order", OrderSchema)