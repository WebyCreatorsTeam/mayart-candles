import { NextFunction, Request, Response } from 'express'
import { Candle } from '../../model/candle.model'
import { handleUpload } from '../../utils/cloudinary/uploadFunc'
import { httpCodes } from '../../utils/httpCodes'

interface IImages {
    img: string
}
//      /candles/save-candle
export const addCandle = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const candleImages: Array<IImages> = []
        const {candle} = req.query
        const images = req.files
        console.log(images)
        // const file = req.query

        console.log(`-------------------------data---------------------------`)
        const aaa = JSON.parse(candle!.toString())
        // console.log(aaa.name)
        // console.log(candle)
        // console.log(`-------------------------file---------------------------`)
        // console.log(req.files)

        for (let i = 0; i < images.length; i++) {
            const b64 = Buffer.from(images[i]!.buffer).toString("base64")
            let dataURI = "data:" + images[i]!.mimetype + ";base64," + b64;
            const {secure_url} = await handleUpload(dataURI)
            candleImages.push({img: secure_url})
            // console.log(dataURI)
            // const element = images[i];
            
        }

        console.log(candleImages)
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
