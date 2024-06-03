import { Schema, model } from "mongoose";

const CategorySchema = new Schema({
    opt: {
        type: String,
        require: [true, "נא למלא קטיגוריה"]
    },
})

export const Category = model("Category", CategorySchema)