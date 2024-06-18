// AboutSchema
import { NextFunction, Request, Response } from 'express'
import { About } from "../model/about.model";
// import multer, { Multer } from 'multer';
// import {
//     v2 as cloudinary, UploadApiResponse,
//     UploadApiErrorResponse
// } from 'cloudinary';
// import sharp from 'sharp';
import { getPublicId } from '../utils/file';
import { imageUpdater } from '../utils/file';

// cloudinary.config({
//     cloud_name: process.env.CLOUD_NAME,
//     api_key: process.env.CLOUD_KEY,
//     api_secret: process.env.CLOUD_SECRET
// });

// interface CloudinaryFile extends Express.Multer.File {
//     buffer: Buffer;
// }

// const storage = multer.memoryStorage();
// export const upload: Multer = multer({ storage: storage });

// export const uploadToCloudinary = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const files: CloudinaryFile[] = req.files as CloudinaryFile[];

//         if (!files || files.length === 0) {
//             return next(new Error('No files provided'));
//         }

//         const cloudinaryUrls: string[] = [];
//         for (const file of files) {
//             const resizedBuffer: Buffer = await sharp(file.buffer)
//                 .resize({ width: 800, height: 600 })
//                 .toBuffer();

//             const uploadStream = cloudinary.uploader.upload_stream(
//                 {
//                     resource_type: 'auto',
//                     folder: 'your-cloudinary-folder-name',
//                 } as any,
//                 (err: UploadApiErrorResponse | undefined, result: UploadApiResponse | undefined) => {
//                     if (err) {
//                         console.error('Cloudinary upload error:', err);
//                         return next(err);
//                     }
//                     if (!result) {
//                         console.error('Cloudinary upload error: Result is undefined');
//                         return next(new Error('Cloudinary upload result is undefined'));
//                     }
//                     cloudinaryUrls.push(result.secure_url);

//                     if (cloudinaryUrls.length === files.length) {
//                         //All files processed now get your images here
//                         req.body.cloudinaryUrls = cloudinaryUrls;
//                         next();
//                     }
//                 }
//             );
//             uploadStream.end(resizedBuffer);
//         }
//     } catch (error) {
//         console.error('Error in uploadToCloudinary middleware:', error);
//         next(error);
//     }
// };

// const resizedBuffer: Buffer = await sharp(file.buffer)
//     .resize({ width: your - width, height: your - height })
//     .toBuffer();








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
        console.log(id, aboutTitle)
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
        console.log(id, aboutDesc)
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