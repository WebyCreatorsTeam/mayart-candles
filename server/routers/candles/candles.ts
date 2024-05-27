import { Request, Response, Router } from "express";
import { getAllCandles } from "../../controllers/candles"
const router = Router()

router.get('/get-all', getAllCandles)

export default router