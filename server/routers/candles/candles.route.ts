import { Router } from "express";
import {
    addCandle,
    addNewColor,
    changeCandleName,
    changeCandlePrice,
    deleteColor,
    getAllCandles,
    getCandleByCategory,
    getOneCandle
} from "../../controllers/candles.controller"
const router = Router()

router
    .get('/get-candles', getAllCandles)
    .post('/get-one-candle', getOneCandle)
    .post('/save-candle', addCandle)
    .post('/get-candles-by-category', getCandleByCategory)
    .patch('/change-candle-name', changeCandleName)
    .patch('/change-candle-price', changeCandlePrice)
    .post('/add-color', addNewColor)
    .delete('/delete-color', deleteColor)

export default router;