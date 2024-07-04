import { Router } from "express";
const router = Router()
import { getAboutText } from "../../controllers/about.contoller";
import { userIsLogin } from "../../middlewares/admin.login";
import aboutRoute from "./about.route"

router
    .get('/get-about', getAboutText)
    .use('/', userIsLogin, aboutRoute)

export default router