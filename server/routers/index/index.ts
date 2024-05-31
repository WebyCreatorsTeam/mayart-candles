import { Request, Response, Router } from "express";
const router = Router()

import candlesRout from '../candles/candles.route'
import adminRout from '../admin/admin.route'
import categoriesRoute from '../category/category.route'

router.get('/status', (req: Request, res: Response) => res.sendStatus(200))

router
    .use("/admin", adminRout)
    .use("/candles", candlesRout)
    .use('/categories', categoriesRoute)

export default router