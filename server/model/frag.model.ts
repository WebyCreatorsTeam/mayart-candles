import { Schema, model } from "mongoose";

const FragSchema = new Schema({
    name: {
        type: String,
        require: [true, "נא למלא ריח"],
    }     
})

export const Frag = model("Frag", FragSchema)