import { NextFunction, Request, Response } from 'express'
import { Candle } from '../../model/candle.model'
import { handleUpload } from '../../utils/cloudinary/uploadFunc'
import { httpCodes } from '../../utils/httpCodes'


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

//  /candles/add-candle-image
export const addCandleImage = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.query

        const candle = await Candle.findById(id)
        const { pictures } = candle!

        if (pictures.length === 4) {
            return res.status(httpCodes.BAD_REQUEST).json({ continueWork: false, message: "לא ניתן לעלות יותר מ4 תמונות" })
        }

        const b64 = Buffer.from(req.file!.buffer).toString("base64");
        let dataURI = "data:" + req.file!.mimetype + ";base64," + b64;
        const cldRes = await handleUpload(dataURI);

        if (!cldRes.secure_url) {
            console.log(`none cldRes.secure_url`)
            return res.status(httpCodes.BAD_REQUEST).json({ continueWork: false, message: "שגיא" })
        }

        candle?.pictures.push({ img: cldRes.secure_url })
        await candle!.save().then(doc=> console.log(doc))

        return res.json({ continueWork: true, message: "נר נשמר בהצלחה", pictures: candle!.pictures })
    } catch (error) {
        next(error)
    }
}

//  /candles/delete-image
export const deleteImage = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id, imageId } = req.body
        const updatedCandle = await Candle.findOneAndUpdate({ _id: id }, { $pull: { pictures: { _id: imageId } } }, { new: true })
        return res.json({ continueWork: true, message: "הצבע הוסר בהצלחה", pictures: updatedCandle!.pictures })
    } catch (error) {
        next(error)
    }
}