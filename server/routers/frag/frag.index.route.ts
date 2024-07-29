import { Router } from "express";
const router = Router()
import { userIsLogin } from "../../middlewares/admin.login";
import { getAllCandleFrags } from "../../controllers/frag.controller";
import fragRoute from './frag.route';

router
    .get('/get-frags', getAllCandleFrags)
    .use('/', userIsLogin, fragRoute)

export default router