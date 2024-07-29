import { Router } from "express";
const router = Router()
import { deleteColor, saveCandleColor } from "../../controllers/color.controller";

router
    .post('/save-color', saveCandleColor)
    .delete('/delete-color', deleteColor)

export default router