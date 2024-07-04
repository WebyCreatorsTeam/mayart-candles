import { Router } from "express";
import {
    getAllCandles,
    getOneCandle,
    getCandleByCategory
} from "../../controllers/candle/getCandle.controller";
import candlesRout from "./candles.route"
import { userIsLogin } from "../../middlewares/admin.login";
const router = Router()

router
    .get('/get-candles', getAllCandles)
    .post('/get-one-candle', getOneCandle)
    .post('/get-candles-by-category', getCandleByCategory)
    .use('/', userIsLogin, candlesRout)

    
export default router;