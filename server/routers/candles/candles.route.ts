import { Router } from "express";
import { addCandle, getAllCandles, getOneCandle } from "../../controllers/candles.controller"
const router = Router()

router
.get('/get-candles', getAllCandles)
// router.get('/get-one-candle', getOneCandle)
.post('/save-candle', addCandle)

export default router