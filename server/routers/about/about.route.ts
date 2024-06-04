
import { Router } from "express";
const router = Router()
import { getAboutText, saveAboutText } from "../../controllers/about.contoller";

router
    .post('/save-about', saveAboutText)
    .get('/get-about', getAboutText)

export default router


