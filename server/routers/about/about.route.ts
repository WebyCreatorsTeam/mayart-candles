import { Router } from "express";
const router = Router()
import {
    edtiAboutDesc,
    edtiAboutTitle,
    getAboutText,
    hendleAboutImageReplace,
} from "../../controllers/about.contoller";
import { upload } from "../../utils/cloudinary/storage";

router
    .patch('/update-about-title', edtiAboutTitle)
    .patch('/update-about-desc', edtiAboutDesc)
    .patch('/update-about-image', upload.single("my_file"), hendleAboutImageReplace)
    // .get('/get-about', getAboutText)

export default router