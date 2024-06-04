import mongoose from "mongoose"

const uri: string = process.env.MONGODB_URI || ""

export const dbconnect = () => {
    try {
        mongoose.connect(uri).then(() => {
            console.log(`db connected`)
        })
    } catch (error) {
        console.log(error)
    }
}