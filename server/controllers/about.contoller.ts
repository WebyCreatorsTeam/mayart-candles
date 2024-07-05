import { NextFunction, Request, Response } from 'express'
import { About } from "../model/about.model";
import { getPublicId } from '../utils/cloudinary/uploadFunc';
import { imageUpdater } from '../utils/cloudinary/uploadFunc';

export const saveAboutText = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = req.body;
        const newAbout = new About(data)
        await newAbout.save()
        return res.json({ continueWork: true, text: "הטקסט נשמר" })
    } catch (error) {
        next(error)
    }
}

//     /about/get-about
export const getAboutText = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const aboutText = await About.findOne({ _id: "665f1cc1a8ae36066076200a" })
        return res.json({ continueWork: true, aboutText })
    } catch (error) {
        next(error)
    }
}

//     /about/update-about-title
export const edtiAboutTitle = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id, aboutTitle } = req.body
        await About.findByIdAndUpdate(id, { $set: { title: aboutTitle } })
        return res.json({ continueWork: true, message: "הכותרת עודכנה בהצלחה" })
    } catch (error) {
        next(error)
    }
}

//     /about/update-about-desc
export const edtiAboutDesc = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id, aboutDesc } = req.body
        await About.findByIdAndUpdate(id, { $set: { desc: aboutDesc } })
        return res.json({ continueWork: true, message: "הכותרת עודכנה בהצלחה" })
    } catch (error) {
        next(error)
    }
}

//     /about/update-about-image
export const hendleAboutImageReplace = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id, oldURL, oldId } = req.query
        const publicId = getPublicId(oldURL)
        const b64 = Buffer.from(req.file!.buffer).toString("base64");
        let dataURI = "data:" + req.file!.mimetype + ";base64," + b64;
        const { secure_url } = await imageUpdater(publicId, dataURI)
        await About.getAboutImages(id, secure_url, oldId)
        return res.json({ continueWork: true, message: "התמונה עודכנה בהצלחה", secure_url })
    } catch (error) {
        next(error)
    }
}