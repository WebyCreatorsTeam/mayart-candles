import { Router } from "express";
import {
    addCandle,
    addNewColor,
    addNewFrag,
    changeCandleName,
    changeCandlePrice,
    deleteColor,
    editDescription,
    editTypeCandle,
    getAllCandles,
    getCandleByCategory,
    getOneCandle,
    removeFrag,
    editSizeCandle,
    addCandleImage,
    deleteImage
} from "../../controllers/candles.controller"
import { upload } from "../../utils/cloudinary/storage";
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
    .post('/add-frag', addNewFrag)
    .delete('/remove-frag', removeFrag)
    .patch('/edit-description', editDescription)
    .patch('/edit-type-candle', editTypeCandle)
    .patch('/edit-size-candle', editSizeCandle)
    .post('/add-candle-image', upload.single("my_file"), addCandleImage)
    .delete('/delete-image', deleteImage)

export default router;