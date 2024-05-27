import { Router } from "express";
import { addCandle, getAllCandles, getOneCandle } from "../../controllers/candles.controller"
const router = Router()

// router.get('/get-all', getAllCandles)
// router.get('/get-one', getOneCandle)
router.post('/save-candle', addCandle)

export default router