
import { Router } from "express";
const router = Router()
import adminRout from './admin.route'
import { loginAdmin } from "../../controllers/admin.contoller";
import { userIsLogin } from "../../middlewares/admin.login";

router
    .post('/login-admin', loginAdmin)
    .use('/', userIsLogin, adminRout)

export default router