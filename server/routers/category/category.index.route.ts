import { Router } from "express";
const router = Router()
import { getAllCategosies, addCategory, removeCategory } from "../../controllers/category.contoller";
import { userIsLogin } from "../../middlewares/admin.login";
import categoryRoute from './category.route'

router
    .get('/get-categories', getAllCategosies)
    .use('/', userIsLogin, categoryRoute)

export default router