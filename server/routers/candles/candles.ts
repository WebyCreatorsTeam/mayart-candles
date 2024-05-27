import { Request, Response, Router } from "express";
import { getAllCandles, getOneCandle } from "../../controllers/candles"
const router = Router()

router.get('/get-all', getAllCandles)
router.get('/get-one', getOneCandle)

export default router