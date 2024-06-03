import { Router } from "express";
const router = Router()
import { getAllCategosies, addCategory } from "../../controllers/category.contoller";

router
.get('/get-categories', getAllCategosies)
.post('/save-category', addCategory)

export default router