import { deleteFrag, saveCandleFrag } from "../../controllers/frag.controller";
import { Router } from "express";
const router = Router()

router
    .post('/save-frag', saveCandleFrag)
    .delete('/delete-frag', deleteFrag)

export default router