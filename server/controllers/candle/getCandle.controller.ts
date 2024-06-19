import { NextFunction, Request, Response } from 'express'
import { Candle } from '../../model/candle.model'
import { handleUpload } from '../../utils/cloudinary/uploadFunc'
import { httpCodes } from '../../utils/httpCodes'

//      /candles/get-candles
export const getAllCandles = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const allCandles = await Candle.find({})
        return res.json({ continueWork: true, allCandles })
    } catch (error) {
        next(error)
    }
}

//      /candles/get-one-candle
export const getOneCandle = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.body
        const candle = await Candle.findById(id)
        console.log(candle)
        return res.json({ continueWork: true, candle })
    } catch (error) {
        next(error)
    }
}

//  /candles/get-candles-by-category
export const getCandleByCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { categoryType } = req.body;
        let categoryCandles
        if (categoryType == "כל הנרות") {
            categoryCandles = await Candle.find({})
        } else {
            categoryCandles = await Candle.find({
                $or: [
                    { type: categoryType },
                    { size: categoryType }
                ]
            })
        }
        return res.json({ continueWork: true, categoryCandles })
    } catch (error) {
        next(error)
    }
}