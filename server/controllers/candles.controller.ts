import { NextFunction, Request, Response } from 'express'
import { Candle } from '../model/candle.model'

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

//  /candles/change-candle-name
export const changeCandleName = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, id } = req.body
        await Candle.findByIdAndUpdate(id, { $set: { name } })
        return res.json({ continueWork: true, message: "השם עודכן בהצלחה" })
    } catch (error) {
        next(error)
    }
}

//  /candles/change-candle-price
export const changeCandlePrice = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id, price, salePrice } = req.body
        await Candle.findByIdAndUpdate(id, { $set: { price, salePrice } })
        return res.json({ continueWork: true, message: "המחיר עודכן בהצלחה" })
    } catch (error) {
        next(error)
    }
}

//  /candles/add-color
export const addNewColor = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id, newColor: { color, hexCode } } = req.body
        const updatedCandle = await Candle.findOneAndUpdate({ _id: id }, { $push: { colors: { color, hexCode } } }, { new: true })
        return res.json({ continueWork: true, message: "הצבע התווסף בהצלחה", colors: updatedCandle!.colors })
    } catch (error) {
        next(error)
    }
}

//  /candles/delete-color
export const deleteColor = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id, colorId } = req.body
        const updatedCandle = await Candle.findOneAndUpdate({ _id: id }, { $pull: { colors: { _id: colorId } } }, { new: true })
        return res.json({ continueWork: true, message: "הצבע הוסר בהצלחה", colors: updatedCandle!.colors })
    } catch (error) {
        next(error)
    }
}

//  /candles/add-frag
export const addNewFrag = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id, newFrag } = req.body
        const updatedCandle = await Candle.findOneAndUpdate({ _id: id }, { $push: { fragrances: newFrag } }, { new: true })
        return res.json({ continueWork: true, message: "הריח התווסף בהצלחה", fragrances: updatedCandle!.fragrances })
    } catch (error) {
        next(error)
    }
}

//  /candles/remove-frag
export const removeFrag = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id, frg } = req.body
        console.log(id, frg)
        const updatedCandle = await Candle.findOneAndUpdate({ _id: id }, { $pull: { fragrances: frg } }, { new: true })
        return res.json({ continueWork: true, message: "הריח הוסר בהצלחה", fragrances: updatedCandle!.fragrances })
    } catch (error) {
        next(error)
    }
}

//  /candles/edit-description
export const editDescription = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id, candleDesc } = req.body
        await Candle.findByIdAndUpdate(id, { $set: { description: candleDesc } })
        return res.json({ continueWork: true, message: "תיאור מוצר עודכן בהצלחה" })
    } catch (error) {
        next(error)
    }
}

//  /candles/edit-type-candle
export const editTypeCandle = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id, type } = req.body
        await Candle.findByIdAndUpdate(id, { $set: { type } })
        return res.json({ continueWork: true, message: "קטגוריה עודכנה בהצלחה" })
    } catch (error) {
        next(error)
    }
}

//  /candles/edit-size-candle
export const editSizeCandle = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id, size } = req.body
        await Candle.findByIdAndUpdate(id, { $set: { size } })
        return res.json({ continueWork: true, message: "גודל מוצר עודכן בהצלחה" })
    } catch (error) {
        next(error)
    }
}