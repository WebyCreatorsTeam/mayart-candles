import { NextFunction, Request, Response } from 'express'
import { Candle } from '../../model/candle.model'
import { getPublicId, handleDeleteMany, handleUpload } from '../../utils/cloudinary/uploadFunc'

interface IImages {
    img: string
}

//      /candles/save-candle
export const addCandle = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const candleImages: Array<IImages> = []
        const images = req.files
        const { candle } = req.body
        const candleObj = JSON.parse(candle!.toString())

        for (let i = 0; i < images.length; i++) {
            const b64 = Buffer.from(images[i]!.buffer).toString("base64")
            let dataURI = "data:" + images[i]!.mimetype + ";base64," + b64;
            const { secure_url } = await handleUpload(dataURI)
            candleImages.push({ img: secure_url })
        }

        const data = { ...candleObj, pictures: candleImages }
        console.log(data)

        const newCandle = new Candle(data)
        await newCandle.save()
        return res.json({ continueWork: true, message: "הנר נשמר" })
    } catch (error) {
        next(error)
    }
}

//      /candles/remove-candle
export const removeCandle = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.body
        const candle = await Candle.findById(id)
        const { pictures } = candle!
        const picturesId = pictures.map((img) => {return `mayart/${getPublicId(img.img)}`})
        console.log(picturesId)
        const aaa = await handleDeleteMany(picturesId)
        console.log(aaa)
        await Candle.findByIdAndDelete(id)
        return res.json({ continueWork: true, message: "הנר נמחק" })
    } catch (error) {
        next(error)
    }
}