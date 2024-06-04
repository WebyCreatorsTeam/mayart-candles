
import { Request, Response, Router } from "express";
const router = Router()
import { getAboutText, saveAboutText, upload, uploadToCloudinary } from "../../controllers/about.contoller";

router
    .post('/save-about', saveAboutText)
    .get('/get-about', getAboutText)
    .post("/upload", upload.array('images', 5), uploadToCloudinary, async (req: Request, res: Response) => {
        try {
            const cloudinaryUrls = req.body.cloudinaryUrls;
            if (cloudinaryUrls.length === 0) {
                console.error('No Cloudinary URLs found.');
                return res.status(500).send('Internal Server Error');
            }
            const images = cloudinaryUrls;
            return res.send(images)

        } catch (error) {
            return res.status(500).json({ error });
        }
    });

export default router


