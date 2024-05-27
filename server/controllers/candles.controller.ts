import { Request, Response } from 'express'
import { Candle } from '../model/candle.model'

export const getAllCandles = (req: Request, res: Response) => {
    try {
        return res.send("All ccccc")
    } catch (error) {
        return res.send(error)
    }
}

export const getOneCandle = (req: Request, res: Response) => {
    try {
        return res.send("One Candle")
    } catch (error) {
        return res.send(error)
    }
}

export const addCandle = async (req: Request, res: Response) => {
    try {
        const data = req.body
        console.log(data)
        const newCandle = new Candle(data)
        await newCandle.save()
        return res.status(200).json({ text: "candle saved" })
    } catch (error) {
        return res.send(error)
    }
}