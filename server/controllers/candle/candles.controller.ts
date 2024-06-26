import { NextFunction, Request, Response } from 'express'
import { Candle } from '../../model/candle.model'
import { handleUpload } from '../../utils/cloudinary/uploadFunc'
import { httpCodes } from '../../utils/httpCodes'

//      /candles/save-candle
export const addCandle = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {candle} = req.query
        // const file = req.query

        console.log(`-------------------------data---------------------------`)
        console.log(candle)
        console.log(`-------------------------file---------------------------`)
        console.log(req.files)
        // const b64 = Buffer.from(req.file!.buffer).toString("base64");
        // let dataURI = "data:" + req.file!.mimetype + ";base64," + b64;

        // console.log(dataURI)
        // const newCandle = new Candle(data)
        // await newCandle.save()
        // return res.json({ continueWork: true, message: "הנר נשמר" })
    } catch (error) {
        next(error)
    }
}

//      /candles/remove-candle
export const removeCandle = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.body
        await Candle.findByIdAndDelete(id)
        return res.json({ continueWork: true, message: "הנר נמחק" })
    } catch (error) {
        next(error)
    }
}
