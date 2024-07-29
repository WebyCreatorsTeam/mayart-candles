import { Router } from "express";
const router = Router()
import { userIsLogin } from "../../middlewares/admin.login";
import { getAllCandleColors } from "../../controllers/color.controller";
import colorRoute from './color.route';

router
    .get('/get-colors', getAllCandleColors)
    .use('/', userIsLogin, colorRoute)

export default router