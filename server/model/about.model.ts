import { Schema, model } from "mongoose";

const AboutSchema = new Schema({
    title: {
        type: String,
        require: [true, "נא למלא את הכותרת"]
    },
    desc: {
        type: String,
        require: [true, "נא למלא תוכן הטקסט"],
    },
    images: {
        type: [String]
    }
})

export const About = model("About", AboutSchema)