import { Router } from "express";
import { upload } from "../../utils/cloudinary/storage";
import {
    addCandle,
    removeCandle,
} from "../../controllers/candle/candles.controller"
import {
    getAllCandles,
    getOneCandle,
    getCandleByCategory
} from "../../controllers/candle/getCandle.controller";
import {
    changeCandleName,
    changeCandlePrice,
    addNewColor,
    deleteColor,
    addNewFrag,
    removeFrag,
    editDescription,
    editTypeCandle,
    editSizeCandle,
    addCandleImage,
    deleteImage
} from "../../controllers/candle/editCandle.controller";
const router = Router()

router
    .get('/get-candles', getAllCandles)
    .post('/get-one-candle', getOneCandle)
    .post('/get-candles-by-category', getCandleByCategory)
    .post('/save-candle', upload.array("my_many_files", 4), addCandle)
    .delete('/remove-candle', removeCandle)
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