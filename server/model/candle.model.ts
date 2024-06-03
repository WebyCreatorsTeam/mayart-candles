import { Schema, model } from "mongoose";

const CandleSchema = new Schema({
    name: {
        type: String,
        require: [true, "נא למלא שם של נר"]
    },
    shape: {
        type: String,
        require: [true, "נא למלא צורה של נר"]
    },
    colors: {
        type: [String],
        required: [true, "נא למלא לפחות צבע אחד של נר"]
    },
    fragrances: {
        type: [String],
        required: [true, "נא למלא לפחות ריח אחד של נר"]
    },
    price: {
        type: Number,
        require: [true, "נא למלא מחיר של המוצר"]
    },
    salePrice: {
        type: Number
    },
    pictures: {
        type: [String],
        required: [true, "נא לבחור לפחות תמונה אחד של נר"]
    },
    description: {
        type: String,
        require: [true, "נא למלא תיאור המוצר"]
    },
    type: {
        type: String,
        require: [true, "נא לבחור קטיגוריה למוצר"]
    },
    size: {
        type: String,
        require: [true, "נא לבחור גודל הנר"]
    },
})

export const Candle = model("Candle", CandleSchema)