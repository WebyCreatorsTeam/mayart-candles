import { Schema, model } from "mongoose";

const AdminSchema = new Schema({
    name: {
        type: String,
        require: [true, "נא למלא שם משתמש"]
    },
    email: {
        type: String,
        require: [true, "נא למלא אימייל"],
        lowercase: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        require: [true, "נא למלא סיסמא"],
    }
})

export const Admin = model("Admin", AdminSchema)