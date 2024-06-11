import { NextFunction, Request, Response } from 'express'
import { Candle } from '../model/candle.model'

//      /candles/get-candles
export const getAllCandles = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const allCandles = await Candle.find({})
        return res.json({continueWork: true, allCandles})
    } catch (error) {
        next(error)
    }
}

//      /candles/get-one-candle
export const getOneCandle = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.body
        const candle = await Candle.findById(id)
        console.log(candle)
        return res.json({continueWork: true, candle})
    } catch (error) {
        next(error)    
    }
}

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