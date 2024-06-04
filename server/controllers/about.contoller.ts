// AboutSchema
import { NextFunction, Request, Response } from 'express'
import { About } from "../model/about.model";
import {v2 as cloudinary} from "cloudinary";

// export const handleUpload = async (file) => {
//     const res = await cloudinary.uploader.upload(file, {
//         resource_type: "auto",
//         folder: 'mayart'
//     });
//     return res;
// }

//     /about/save-about
export const saveAboutText = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = req.body;

        // const b64 = Buffer.from(req.file.buffer).toString("base64");
        // let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
        // const cldRes = await handleUpload(dataURI);



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
        const aboutText = await About.find({})
        return res.json({ continueWork: true, aboutText })
    } catch (error) {
        next(error)
    }
}