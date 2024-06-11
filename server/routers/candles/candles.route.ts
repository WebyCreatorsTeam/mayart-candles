import { Router } from "express";
import { addCandle, getAllCandles, getCandleByCategory, getOneCandle } from "../../controllers/candles.controller"
const router = Router()

router
    .get('/get-candles', getAllCandles)
    .post('/get-one-candle', getOneCandle)
    .post('/save-candle', addCandle)
    .post('/get-candles-by-category', getCandleByCategory)

export default router;