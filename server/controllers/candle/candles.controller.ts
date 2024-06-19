import { NextFunction, Request, Response } from 'express'
import { Candle } from '../../model/candle.model'
import { handleUpload } from '../../utils/cloudinary/uploadFunc'
import { httpCodes } from '../../utils/httpCodes'

//      /candles/save-candle
export const addCandle = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = req.body
        const newCandle = new Candle(data)
        await newCandle.save()
        return res.json({ continueWork: true, text: "candle saved" })
    } catch (error) {
        next(error)
    }
}
