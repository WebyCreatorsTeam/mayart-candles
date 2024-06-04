// AboutSchema
import { NextFunction, Request, Response } from 'express'
import { About } from "../model/about.model";
import multer, { Multer } from 'multer';
import {
    v2 as cloudinary, UploadApiResponse,
    UploadApiErrorResponse
} from 'cloudinary';
import sharp from 'sharp';

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_KEY,
    api_secret: process.env.CLOUD_SECRET
});

interface CloudinaryFile extends Express.Multer.File {
    buffer: Buffer;
}

const storage = multer.memoryStorage();
export const upload: Multer = multer({ storage: storage });

export const uploadToCloudinary = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const files: CloudinaryFile[] = req.files as CloudinaryFile[];

        if (!files || files.length === 0) {
            return next(new Error('No files provided'));
        }

        const cloudinaryUrls: string[] = [];
        for (const file of files) {
            const resizedBuffer: Buffer = await sharp(file.buffer)
                .resize({ width: 800, height: 600 })
                .toBuffer();

            const uploadStream = cloudinary.uploader.upload_stream(
                {
                    resource_type: 'auto',
                    folder: 'your-cloudinary-folder-name',
                } as any,
                (err: UploadApiErrorResponse | undefined, result: UploadApiResponse | undefined) => {
                    if (err) {
                        console.error('Cloudinary upload error:', err);
                        return next(err);
                    }
                    if (!result) {
                        console.error('Cloudinary upload error: Result is undefined');
                        return next(new Error('Cloudinary upload result is undefined'));
                    }
                    cloudinaryUrls.push(result.secure_url);

                    if (cloudinaryUrls.length === files.length) {
                        //All files processed now get your images here
                        req.body.cloudinaryUrls = cloudinaryUrls;
                        next();
                    }
                }
            );
            uploadStream.end(resizedBuffer);
        }
    } catch (error) {
        console.error('Error in uploadToCloudinary middleware:', error);
        next(error);
    }
};

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
        const aboutText = await About.find({})
        return res.json({ continueWork: true, aboutText })
    } catch (error) {
        next(error)
    }
}