
import { Request, Response, Router } from "express";
const router = Router()
import {
    edtiAboutDesc,
    edtiAboutTitle,
    getAboutText,
    hendleAboutImageReplace,
    // saveAboutText,
    // upload,
    // uploadToCloudinary
} from "../../controllers/about.contoller";
import { upload } from "../../utils/cloudinary/storage";

router
    .patch('/update-about-title', edtiAboutTitle)
    .patch('/update-about-desc', edtiAboutDesc)
    .patch('/update-about-image', upload.single("my_file"), hendleAboutImageReplace)
    .get('/get-about', getAboutText)

export default router


// .post('/save-about', saveAboutText)
// .post("/upload", upload.array('images', 5), uploadToCloudinary, async (req: Request, res: Response) => {
//     try {
//         const cloudinaryUrls = req.body.cloudinaryUrls;
//         if (cloudinaryUrls.length === 0) {
//             console.error('No Cloudinary URLs found.');
//             return res.status(500).send('Internal Server Error');
//         }
//         const images = cloudinaryUrls;
//         return res.send(images)

//     } catch (error) {
//         return res.status(500).json({ error });
//     }
// });
