import { Schema, model } from "mongoose";

const ColorSchema = new Schema({
    color: {
        type: String,
        require: [true, "נא למלא שם הצבע"],
    }, 
    hexCode: {
        type: String,  
        require: [true, "נא לבחור צבע"],
    }       
})

export const Color = model("Color", ColorSchema)